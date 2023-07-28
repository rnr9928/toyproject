import React, { useState } from 'react'
import '../../styled/Portfolio.scss'
import PortList from '../portfolioList/PortList'

const Portfolio = () => {
 
  const [select,setSelect] = useState("web1")
  const list = [
    {
      id: "web1",
      title: "Web1"
    },
    {
      id: "web2",
      title: "Web2"
    },
    {
      id: "web3",
      title: "Web3"
    },
    {
      id: "web4",
      title: "Web4"
    },
    {
      id: "web5",
      title: "Web5"
    },
    {
      id: "web6",
      title: "Web6"
    },
  ]
  return (
    <div className='port' id='port'>
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) =>(
            <PortList 
            title={item.title} 
            active={select === item.id} 
            setSelect={setSelect}
            id={item.id}/>
          ))}
        </ul>
        <div className='box'>
          <div className='item'>
            <img src='img/1.png'/>
            <h3>Web</h3>
          </div>
          <div className='item'>
            <img src='img/1.png'/>
            <h3>Web</h3>
          </div>
          <div className='item'>
            <img src='img/1.png'/>
            <h3>Web</h3>
          </div>
          <div className='item'>
            <img src='img/1.png'/>
            <h3>Web</h3>
          </div>
          <div className='item'>
            <img src='img/1.png'/>
            <h3>Web</h3>
          </div>
          <div className='item'>
            <img src='img/1.png'/>
            <h3>Web</h3>
          </div>
        </div>
    </div>
  )
}

export default Portfolio