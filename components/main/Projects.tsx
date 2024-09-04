import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
My Projects
        </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Guess the Number.png"
          title="How to make Guess the Number game in typescript || Typescript Projects"
          description="Learn creating an amazing game of guessing numbers using Typescript & NPM."
          />
        <ProjectCard
          src="/gauhar thumbnail.png"
          title="How to make Calculator with typescript"
          description="Learn creating a calculator using Typescript & NPM."
          
        />
      </div>
      </div>
    </div>
  )
}

export default Projects
