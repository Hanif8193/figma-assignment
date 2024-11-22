import React from 'react'
import Image from 'next/image'
import S2 from "../../../../../public/S2.png"
function About() {
  return (
    <div id='about' className='bg-blue-50 py-16'>
     <Image src={S2}alt='S2'width={400}height={400} className='w-full h-full px-20' /> 
    </div>
  )
}

export default About
