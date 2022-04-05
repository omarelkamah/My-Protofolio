import React from 'react'
import Contact from '../../components/contact/Contact'
import './contactPage.scss'

export default function ContactPage({dark}) {
  return (
    <div className='contactPage' style={{background: dark && "#222"}}>
        <Contact dark={dark} />
    </div>
  )
}
