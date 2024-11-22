import React from 'react'
import Image from 'next/image'
import S3 from "../../../../../../public/S3.png"
function Skill() {
  return (
    <div  id='skill'  className='bg-blue-50 py-16'>
    <Image src={S3}alt='S3'width={400}height={400} className='w-full h-full px-20S' />  
    </div>
  )
}

export default Skill
