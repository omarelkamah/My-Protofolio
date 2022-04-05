import './about.scss'
import Fade from 'react-reveal/Fade'

export default function About ({ dark }) {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 a-left'>
            <Fade left>
              <div
                className='a-card bg'
                style={{ background: dark && 'rgb(255 255 255 / 58%)' }}
              ></div>
              <div className='a-card'>
                <img src='assets/profileImg/me.jpg' alt='' className='a-img' />
              </div>
            </Fade>
          </div>
          <div className='col-lg-6 a-right'>
            <Fade right>
              <h1 className='a-title'>About Me</h1>
              <p className='a-sub'>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <p className='a-desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehende.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}
