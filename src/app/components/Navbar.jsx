'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Search from './Search'

const navLinks = [
  { title: 'About', path: '/#about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' }
]
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 w-full z-10 bg-[#121212] bg-opacity-100 mx-auto border border-[#33353F]'>
      <div className='container flex items-center justify-between px-4 py-2 mx-auto lg:py-4'>
        <Link
          href={'/'}
          className='text-2xl font-semibold text-white md:text-5xl'
        >
          LOGO
        </Link>
        <Search />
        <div className='block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <Bars3Icon className='w-5 h-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <XMarkIcon className='w-5 h-5' />
            </button>
          )}
        </div>
        <div className='hidden menu md:flex md:w-auto' id='navbar'>
          <ul className='flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8'>
            {/* <li className='text-white hover:text-gray-400'>
              <Link href='#about'>About</Link>
            </li>
            <li className='text-white hover:text-gray-400'>
              <Link href='#blog'>Blog</Link>
            </li> */}
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />
      ) : null}
    </nav>
  )
}

export default Navbar
