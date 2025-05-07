import React from 'react'
import MyProfilePic from './MyProfilePic'
import Posts from './Posts'

const BlogSection = () => {
  return (
    <section className='text-white' id='blog'>
      <div
        className='flex items-center h-screen bg-gradient-to-r from-primary-300 to-secondary-400 rounded-xl'
        id='blog'
      >
        <div className='px-6 mx-auto max-w-7xl lg:px-8'>
          <div className='max-w-2xl mx-auto lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Min blogg
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600'>
              Följ min blogg där jag kommer posta olika poster under kategorier.
            </p>
            <MyProfilePic />
          </div>
        </div>
        <Posts />
      </div>
    </section>
  )
}

export default BlogSection
