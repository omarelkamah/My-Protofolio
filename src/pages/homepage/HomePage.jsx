import React from 'react'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import DownloadCv from '../../components/downloadCv/DownloadCv'
import Intro from '../../components/intro/Intro'
import ProductList from '../../components/productList/ProductList'
import './homePage.scss'

export default function HomePage ({ dark, setDark }) {
  return (
    <div
      className='homePage'
      style={{ background: dark && '#222', color: dark && '#fff' }}
    >
      <Intro dark={dark} />
      <About dark={dark} />
      <ProductList dark={dark} />
      <DownloadCv />
      <Contact dark={dark} />
    </div>
  )
}
