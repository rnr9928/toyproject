import React from 'react'
import './App.scss'
import Top from './components/top/Top'
import Intro from './components/intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Work from './components/work/Work'
import Test from './components/test/Test'
import { useState } from 'react'

const App = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className='app'>
      <Top menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className='sections'>
      <Intro/>
      <Portfolio/>
      <Work/>
      <Test/>
      <Contact/>
    </div>
    </div>
  )
}

export default App