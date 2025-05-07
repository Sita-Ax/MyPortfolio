import Image from 'next/image'
import React from 'react'

const MyProfilePic = () => {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='mx-auto mt-8 border-4 border-black rounded-full dark:border-slate-500 drop-shadow-xl shadow-black'
        src={'../../images/profile-photo.png'}
        alt='Rosita'
        width={200}
        height={200}
        priority={true}
      />
    </section>
  )
}

export default MyProfilePic
