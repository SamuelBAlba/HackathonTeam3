import React from 'react'
import "../Css/Info.css"
import Recycle from "./recycle.jpg"

export default function Info() {
  return (
    <div className='Info'>
      <h1>How To Recycle</h1>
      <div className='img'>

      <img src={Recycle} alt="Logo" />
      </div>
      
      </div>
  )
}
