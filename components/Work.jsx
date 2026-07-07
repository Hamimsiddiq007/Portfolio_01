import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] scroll mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>My Portfolio</h4>
      <h2 className='text-center text-5xl font-ovo'>My latest work</h2>

      <p className='text-center mx-auto max-w-2xl mt-5 mb-12 font-ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>

      <div className="">
        {workData.map((project, index) => (
            <div key={index} style={{backgroundImage: `url(${project.bgImage})`}} className="">
                <div className="">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
                <div className="">
                    <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Work
