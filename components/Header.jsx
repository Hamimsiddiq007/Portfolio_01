import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="">
        <Image src={assets.profile_img} alt='profile' className='rounded-full w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I am William Mark <Image src={assets.hand_icon} alt='hand' className='w-6'/></h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>frontend web developer based in London.</h1>
      <p className='max-w-2xl mx-auto font-ovo'>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
        <a href="/sample-resume.pdf" download className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2'>My resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
      </div>
    </div>
  )
}

export default Header
