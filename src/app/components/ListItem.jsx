import React from 'react'
import Link from 'next/link'
import getFormattedDate from '../../../lib/getFormattedDate'

const ListItems = ({ post }) => {
  const { id, title, date } = post
  const formattedDate = getFormattedDate(date)
  return (
    <div>
      <li className='mt-4 text-2xl dark:text-white/90'>
        <Link
          className='underline hover:text-black/70 dark:hove:text-white'
          href={`/posts/${id}`}
        >
          {title}
        </Link>
        <br />
        <p className='text-sm mt-1'>{formattedDate}</p>
      </li>
    </div>
  )
}

export default ListItems
