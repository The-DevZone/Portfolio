import React from 'react'
import ProjectCard from '../ProjectCard'

const Project = () => {
    return (
        <>
            <div className='text-white mt-10'>
                <h2 className=' text-2xl text-center'>PROJECTS</h2>
                {<ProjectCard />}
               
            </div>
        </>
    )
}

export default Project