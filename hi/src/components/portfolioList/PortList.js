import React from 'react'
import "../../styled/PortList.scss"

const PortList = ({id,title,active,setSelect}) => {
  return (
    <li className={active ? "portList active" : "portList"}
     onClick={() => setSelect(id)}>
        {title}
    </li>
  )
}

export default PortList