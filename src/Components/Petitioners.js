import axios from 'axios'
import {useState, useEffect} from "react"

const API = process.env.REACT_APP_API_URL;


export default function Petitioners() {
  const [petitioners, setPetitioners] = useState([])
  useEffect(()=>{
    axios.get(`${API}/petitions`)
    .then((response) => setPetitioners(response.data))
    .catch((err) => console.warn("catch", err))
  }, [])
  return (
    <div className='petitioners'>
      {petitioners 
      ? petitioners.map((petition) => {
        return <Petitioners key={petitioners.name} petitioners={petitioners} />
      })
      : null}
    </div>
  )
}
