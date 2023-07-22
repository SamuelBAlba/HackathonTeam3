import React from 'react'
import Sam from "./Sam.jpeg"
import Johnny from "./Johnny.jpg"
import Angel from "./Angel.jpg"
import Max from "./Max.jpg"
import "../Css/Team.css"


export default function Team() {
  return (
      <div className='Team'>
  
        <h1> Waste Wise Team </h1>
        
        <div className='Sam'>
            <h2> Samuel A.</h2>
            <img src={Sam} alt="Sam-img" width={300}></img>
              <br></br>
              <a className="git" href='https://github.com/SamuelBAlba'>Github</a>
              <br></br>
              <a className="linked" href="https://www.linkedin.com/in/samuel-alba-8b2a4b257/"> LinkedIn </a>     
        </div>
        
        <div className='Johnny'>
            <h2> Johnny C.</h2>
            <img src={Johnny} alt="Johnny-img" width={300}></img>
              <br></br>
              <a className="git" href='https://github.com/JohnnyMCR'>Github</a>
              <br></br>
              <a className="linked" href="https://github.com/JohnnyMCR/"> LinkedIn </a>     
        </div>


        <div className='Angel'>
            <h2> Angel V.</h2>
            <img src={Angel} alt="Angel-img" width={300}></img>
              <br></br>
              <a className="git" href='https://github.com/ajvee'>Github</a>
              <br></br>
              <a className="linked" href="https://www.linkedin.com/in/angeljvilla/"> LinkedIn </a>     
        </div>


        <div className='Max'>
            <h2>Max W.</h2>
              <img src={Max} alt="Max-img" width={300}></img>
              <br></br>
              <a className="git" href="https://github.com/maxwattan"> Github </a>
              <br></br>
              <a className="linked" href="https://www.linkedin.com/in/maxwattana/"> LinkedIn </a>
          </div>
    
    </div>
        
  )
}
