import React, { useEffect, useState } from 'react'
import '../../styled/Portfolio.scss'
import PortList from '../portfolioList/PortList'
import { Teamproject,Toyproject,
Blog } from '../data/Data'

const Portfolio = () => {
 
  const [select,setSelect] = useState("web1")
  const [data,setData] = useState([])
  const list = [
    {
      id: "Teamproject",
      title: "TeamProject"
    },
    {
      id: "Toyproject",
      title: "ToyProject"
    },
    {
      id: "Blog",
      title: "Blog"
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

  useEffect(()=>{

    switch(select){
      case "Teamproject":
        setData(Teamproject);
        break;
      case "Toyproject":
        setData(Toyproject);
        break;
      case "Blog":
        setData(Blog);
        break;
        default:
          setData(Teamproject)
    }
  },[select])  

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

          {data.map((i)=> (
            <div className='item'>
            <img src='img/1.png'/>

            <h3>{i.title}</h3>
          </div>
          ))} 

        </div>
    </div>
  )
}

export default Portfolio