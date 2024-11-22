import React from 'react'
import Image from 'next/image'
import FT from "../../../public/Ft.png"

function Footer() {
  return (
    <div id='Contact' className='bg-blue-50'>
      <Image src={FT}alt='FT'width={100}height={100} className='w-7/12  px-24' />
    </div>
  )
}

export default Footer

