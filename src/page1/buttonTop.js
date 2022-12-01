import React from 'react';
import "./buttonTop.css";

function ButtonTop() {
  return (
      <div>
          <a href="/list" className='neonbutton'>Dashboard</a>
          <a href="/form" className='neonbutton'>Settings</a>
    </div>
  )
}

export default ButtonTop;