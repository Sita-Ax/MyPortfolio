import React from 'react'
import MyProfilePic from './MyProfilePic'
import Posts from './Posts'

const BlogSection = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-primary-300 to-secondary-400 flex items-center rounded-xl'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            My blog
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>
            Follow my blog where I post different content categories.
          </p>
          <MyProfilePic />
        </div>
      </div>
      <Posts />
    </div>
  )
}

export default BlogSection
