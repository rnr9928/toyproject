import React from 'react'
import '../../styled/Intro.scss'
import Text from '../text/Text'

const Intro = () => {
  return (
    <div className='intro' id='intro'>
    <div className='left'>
    <div className='img'>
      <img src='img/git.png'/>
    </div>
    </div>
      <div className='right'>
        <div className='box'>
         <Text/>
        </div>
        <a href='#port'>
          <img src='img/under.png'></img>
        </a>
      </div>
    </div>
  )
}

export default Intro