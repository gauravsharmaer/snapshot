import React ,{ useEffect,useState}from 'react'
import { BrowserRouter,Route,Routes,useNavigate } from 'react-router-dom'

import Mountains from './Mountains'
import Beach from './Beach'
import Birds from './Birds'
import Food from './Food'
import Navbar from './Navbar'
import "./index.css"
import axios from "axios"
import Default from './Default'









const App = () => {
const navigate=useNavigate()
  const[value,setValue]=useState("")
  const[image,setImage]=useState([])
 const handlechange=(e)=>{
     setValue(e.target.value)
 }

 const handleclick=()=>{
  navigate(`/default?key=${value}`);
setValue("")



}
   
 


  return (
    <>



 
<h1>Snapshot</h1>
  

    <div className='searchbar'><input type="text" placeholder='search' onChange={handlechange} value={value}/>
    <button onClick={handleclick}>search</button></div>
    <Navbar/>
  
    <Routes>
    
    <Route path="/mountains" element={<Mountains />} />
    <Route path="/beach" element={<Beach/>} />
    <Route path="/birds" element={<Birds/>} />
    <Route path="/food" element={<Food/>} />
    <Route path="/default" element={<Default handleclick={handleclick}/>} />
</Routes>

    


    <div >
      {image.map((image) => (
        <img
          key={image.id}
          src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
          alt={image.title}
        />
      ))}
    </div>

    </>
  )
}

export default App