import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WhatsAppIcon from '../../../public/whatsapp-icon.svg'
import FacebookIcon from '../../../public/facebook-icon.svg'
import RoadIcon from '../../../public/road-icon.svg'

const Footer = () => {
  return (
    <footer className='footer border z-10 footer-t-[#33353F] border-l-transparent border-r-transparent'>
      <div className='container flex justify-between p-12'>
        {/* <span>LOGO </span> */}
        <Link href='website'>
          <Image src={RoadIcon} alt='road Icon' />
        </Link>
        <div className='flex flex-row gap-2 socials'>
          <Link href='whatsapp.com'>
            <Image src={WhatsAppIcon} alt='WhatsApp Icon' />
          </Link>
          <Link href='facebook.com'>
            <Image src={FacebookIcon} alt='Facebook Icon' />
          </Link>
        </div>

        <p className='text-slate-600'>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
