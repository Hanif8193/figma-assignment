
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    
    <div className='bg-blue-50 postion:'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      
      <span className="ml-3 text-xl">Rizfan</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"}   className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-gray-900">About</Link>
      <Link href={"#skill"} className="mr-5 hover:text-gray-900">Skill</Link>
      <Link href={"#Project"} className="mr-5 hover:text-gray-900">Project</Link>
      <Link href={"#contact"} className="mr-5 hover:text-gray-900">Contact</Link>
      
    </nav>
   
   
  </div>
</header>

    </div>
    
  )
}

export default Navbar

