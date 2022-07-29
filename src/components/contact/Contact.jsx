import './contact.scss'
import Fade from 'react-reveal/Fade'
import { useSelector } from 'react-redux'
import { BsFillTelephonePlusFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import {
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillFacebook
} from 'react-icons/ai'

export default function Contact () {
  const theamState = useSelector(state => state)

  return (
    <div
      className='contact'
      style={{
        background: theamState.value && '#222',
        color: theamState.value && 'white'
      }}
    >
      <div className='c-bg'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 c-left'>
            <Fade left>
              <h1 className='c-title'>Contact Info</h1>
              <div className='c-info'>
                <div className='c-info-item'>
                  <BsFillTelephonePlusFill className='c-icon' />
                  +20 101 604 629 8
                </div>
                <div className='c-info-item'>
                  <MdEmail className='c-icon' />
                  <a href='mailto:omarwork010@gmail.com'>
                    omarwork010@gmail.com
                  </a>
                </div>
                <div className='c-info-item'>
                  <HiLocationMarker className='c-icon' />
                  Alexandria - El Mandara
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-lg-6 c-right'>
            <Fade right>
              <h2 className='c-title'>Social Media</h2>
              <div className='c-links'>
                <div className='c-link'>
                  <AiFillLinkedin className='c-icon' />
                  <a
                    href='https://www.linkedin.com/in/omar-el-kammah-85abb4232/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Linkedin
                  </a>
                </div>
                <div className='c-link'>
                  <AiOutlineWhatsApp className='c-icon' />
                  <a
                    href='https://wa.me/qr/IRWDXD7ABZCWP1'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Whats App
                  </a>
                </div>
                <div className='c-link'>
                  <AiFillFacebook className='c-icon' />
                  <a
                    href='https://www.facebook.com/omarelkammah10/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}
