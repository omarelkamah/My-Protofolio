import React from 'react'
import './projects.scss'

import { dataProjectsPage } from '../../data'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'

export default function Projects ({ dark }) {
  return (
    <div
      className='projectsPage'
      style={{ background: dark ? '#222' : 'white' }}
    >
      <div className='container'>
        <div className='ProjectsPageInfo'>
          <h1>All Projects in one place...</h1>
        </div>
        <Fade top>
          <div className='row '>
            {dataProjectsPage.map(project => (
              <div className='col-md-4' key={project.id}>
                <div className='item'>
                  <div
                    className='item-number'
                    style={{ background: `${project.buttonColor}` }}
                  >
                    #{project.id}
                  </div>
                  <div className='imgContainer'>
                    <img
                      src={project.img}
                      alt='project-img'
                      className='img-fluid'
                    />
                  </div>
                  <div className='item-buttons'>
                    <Link
                      to={`/projects/${project.id}`}
                      style={{ background: `${project.buttonColor}` }}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  )
}
