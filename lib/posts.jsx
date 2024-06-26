import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'


const postsDirectory = path.join(process.cwd(), 'blogposts')
//This file is to get and handle postdate from markdown files and dynamic sides.
export function getSortedPostsData () {
  //Get file name under / posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    //Remove '.md' from file name to get id
    const id = fileName.replace(/\.md$/, '')
    //Read markdown file as a string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    //Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    const blogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date
    }
    //Combine the data with the id
    return blogPost
  })
  //Sort posts by date, send a return state
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostIds () {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        postId: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData (id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
  .use(html)
  .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml
  }
}
