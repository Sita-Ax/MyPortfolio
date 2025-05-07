import React from 'react'

const Blog = ({ posts }) => {
  return (
    <div>
      {posts.map(post => {
        ;<div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>
            {' '}
            By {post.author} on {post.publishedAt.toDateString()}
          </small>
        </div>
      })}
    </div>
  )
}

export default Blog
