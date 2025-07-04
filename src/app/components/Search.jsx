'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Search = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}`)
  }

  return (
    <form
      className='flex justify-center w-32 h-6 md:justify-between'
      onSubmit={handleSubmit}
    >
      <div className='flex items-center justify-center bg-slate-200 rounded-xl'>
        <input
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='w-full h-4 p-2 text-xl border border-white bg-slate-200 rounded-xl'
          placeholder='Search'
        />
        <button type='submit'>
          <svg
            className='text-teal-400 h-5 w-5 top-3.5 right-3 m-2 fill-current dark:text-teal-300'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            x='0px'
            y='0px'
            viewBox='0 0 56.966 56.966'
            xmlSpace='preserve'
          >
            <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z'></path>
          </svg>
        </button>
      </div>
    </form>
  )
}

export default Search
