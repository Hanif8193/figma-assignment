import React from 'react'
import Image from 'next/image'
import S1 from "../../../../public/S1.png"
function Hero() {
  return (
    <div     className='bg-blue-50 py-16'>
      <Image src={S1}alt='S1'width={400}height={400} className='w-full h-full px-20' />
    </div>
  )
}

export default Hero
