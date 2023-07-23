import React from 'react'
import "../Css/FourOFour.css"
import Planet from "./earth.gif"

export default function FourOFour() {
  return (
    <div className='FourOFour'>
      
      <h1> Sorry, We Can Not Find What You Are Looking For.
      </h1>
      <div className='img'>

      <img src={Planet} alt="Logo" />
      </div>

      
      </div>
  )
}
