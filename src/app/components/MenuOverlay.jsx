import Link from 'next/link'
import React from 'react'

const MenuOverlay = ({ links, setNavbarOpen }) => {
  return (
    <div className='fixed inset-0 z-20 bg-black bg-opacity-75 flex items-center justify-center'>
      <ul className='flex flex-col space-y-4'>
        {links.map((link, index) => (
          <li key={index} className='text-white text-xl'>
            <Link href={link.path} onClick={() => setNavbarOpen(false)}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuOverlay
