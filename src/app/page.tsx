import React from 'react'
import Hero from './(auth)/hero/page'
import About from './(auth)/hero/about/page'
import Skill from './(auth)/hero/about/skill/page'
import Project from './(auth)/hero/about/skill/project/page'

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
    </div>
  )
}

export default Home
