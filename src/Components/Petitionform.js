import axios from 'axios'
import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const API = process.env.REACT_APP_API_URL

export default function Petition() {
    let navigate = useNavigate()

    const addPetition = (newPetition) => {
        axios
        .post(`${API}/index/petitionform`, newPetition)
        .then(
            () => {
                navigate(`/index/petitionform`)
            }, 
            (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    }
    const [petition, setPetition] = useState({
        name: "",
        borough: "",
        address: "",
        bin_mpg: "",
        bin_p: "",
    })

    const handleTextChange = (event) => {
        setPetition({...petition, [event.tatget.id]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        addPetition(petition)
    }
  return (
    <div className='petitionform'>
    <Link to={`/index/petitionform/petitioners`}>
    <button>List of Petitioners</button>
    </Link>

<form onSubmit={handleSubmit}>
    <label htmlFor="name"> Name: </label>
    <input 
    id="name"
    type="text"
    placeholder='First and Last Name of Petitioner'
    onChange={handleTextChange}
    required/>

<label htmlFor="borough"> Borough: </label>
    <input 
    id="borough"
    type="text"
    placeholder='Borough Location'
    onChange={handleTextChange}
    required/>

<label htmlFor="address"> Address: </label>
    <input 
    id="address"
    type="text"
    placeholder='Address of Petitioner'
    onChange={handleTextChange}
    required/>

<label htmlFor="bin_mpg"> Bin(Metal, Plastic, Glass): </label>
    <input 
    id="bin_mpg"
    type="text"
    placeholder='Amount Of Bin'
    onChange={handleTextChange}
    required/>

<label htmlFor="bin_p"> Bin(Paper): </label>
    <input 
    id="bin_p"
    type="text"
    placeholder='Amount Of Bin'
    onChange={handleTextChange}
    required/>
    
    <br></br>
    <input type="submit" />

</form>

    </div>
  )
}
