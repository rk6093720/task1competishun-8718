import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

function Signup() {
    const  navigate = useNavigate();
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [pass,setPass]= useState("");
    const [error,setError]= useState("");
    const [flag,setFlag]= useState(false);
    const handleSignup=(e)=>{
        e.preventDefault();
        if (!name || !email || !pass) {
            setError("Fill all fields");
            return;
          }
          setError("");
        setFlag(true);
      createUserWithEmailAndPassword(auth,email,pass)
      .then(async(res)=>{
        setFlag(false);
        const user = res.user;
        await updateProfile(user,{
            displayName:name
        })
        navigate("/")
        // console.log(res,"data")
      })
      .catch((err)=>{
        setFlag(false);
        setError(err.Message)
      })

    }
  return (
    <div className='signup'>
        <h1>Signup</h1>
        <form  onSubmit={handleSignup}>
            <input type="text"
            placeholder='enter your name' 
            value={name}
            onChange={(e)=> setName(e.target.value)} />
            <br />
            <input type="email" 
            placeholder='enter your email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)} />
            <br />
            <input type="password" 
            placeholder='enter your password' 
            value={pass}
            onChange={(e)=> setPass(e.target.value)}/>
            <br />
            <div className='Inputsubmit'>
                <b>{error}</b>
            <input type="submit" value="Submit" disabled={flag} />
            </div>
        </form>
        <div className='gotologin'>
           <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
    </div>
  )
}

export default Signup