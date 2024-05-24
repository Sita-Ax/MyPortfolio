import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col items-center py-4'>
      {links.map(link => (
        <li key={link.id}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay
