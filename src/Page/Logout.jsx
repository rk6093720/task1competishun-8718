import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../FirebaseConfig'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();
    const handlelogout=()=>{
       signOut(auth)
       .then((res)=>{
        console.log("data",res);
         navigate("/")
       })
    }
  return (
    <div className='logout'>
             <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout