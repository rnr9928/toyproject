import React from 'react'
import './App.scss'
import Top from './components/top/Top'
import Intro from './components/intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Work from './components/work/Work'


import { useState } from 'react'
import  Menu  from './components/menu/Menu'

const App = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className='app'>
      <Top menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className='sections'>
      
      <Intro/>
      <Portfolio/>
      <Work/>
    </div>
    </div>
  )
}

export default App