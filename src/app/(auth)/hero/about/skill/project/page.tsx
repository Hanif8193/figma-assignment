import React from 'react'
import Image from 'next/image'
import S4 from "../../../../../../../public/S4.png"
function Project() {
  return (
    <div id='Project'  className='bg-blue-50 py-16'>
     <Image src={S4}alt='S4'width={400}height={400} className='w-full h-full px-20' /> 
    </div>
  )
}

export default Project