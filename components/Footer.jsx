import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2' />

        <div className="w-max flex items-center gap-2 mx-auto">
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='logo' className='w-6' />
            hamimsiddiq915@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2026 Hamim Siddiq. All rights reserved</p>
        <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/Hamimsiddiq007">Github</a></li>
            <li><a target='_blank' href=" https://www.linkedin.com/in/hamim-siddik-6a904b3a9">LinkedIn</a></li>
            <li><a target='_blank' href="#">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
