import React from 'react'
import { Fade } from 'react-reveal'
import './downloadCv.scss'

export default function DownloadCv () {
  return (
    <div className='cv'>
      <div className='container'>
        <Fade top>
          <h3 className='cv-info'>check my CV...</h3>
        </Fade>
        <Fade bottom>
          <a href='assets/cv.pdf' download>
            download
          </a>
        </Fade>
      </div>
    </div>
  )
}
