import React from 'react'
import { Link } from "react-router-dom"
import Locations from '../Components/Locations'
import "../Css/IndexLocation.css"

export default function Index() {
  return (
    <div className='Index'>
      <button>
        <Link to="/index/petitionform">Sign A Petition</Link>
      </button>
      <Locations />
    </div>
  )
}



