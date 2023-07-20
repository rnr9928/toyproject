import React from 'react'
import './App.css'
import Top from './components/top/Top'
import Intro from './components/intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div className='app'>
      <Top/>
    <div className='sections'>
      <Intro/>
      <Portfolio/>
      <Contact/>
    </div>
    </div>
  )
}

export default App