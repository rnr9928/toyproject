import "../../styled/Top.scss";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ToggleButton from '@mui/material/ToggleButton';
import MailIcon from '@mui/icons-material/Mail';
import React from "react";

export default function Top({ menuOpen, setMenuOpen }) {

  // 휴대폰, 이메일 아이콘 
  const [devices, setDevices] = React.useState(() => ['phone']);
  const handleDevices = (event, newDevices) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  return (
    <div className={"top " + (menuOpen && "active")}>
      <div className="box">
        <div className="left">
          {/* 로고 클릭시 맨위로 */}
          <a href="#intro" className="logo">
            GUK
          </a>
          {/* 휴대폰 , 이메일 아이콘 */}
          <ToggleButton value="phone" aria-label="phone">
          <PhoneAndroidIcon />   
        </ToggleButton>
        <ToggleButton value="mail" aria-label="mail">
          <MailIcon/>
        </ToggleButton>
    
          
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}