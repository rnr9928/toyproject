// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleColaClick = () => {
    console.log("클릭됨?")
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };

  return (
    <div className="Card">
      <img
        className={`Cola${isActive ? ' active' : ''}`}
        src="img/cola.png"
        alt="콜라 이미지"
        onClick={handleColaClick}
      />
    </div>
  );
}

export default App;
