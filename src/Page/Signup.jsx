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
    <div className='signup'style={{border:"1px solid black", width:"30%", height:"400px",margin:"auto",marginTop:"5px",backgroundImage:"URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_enQvl_kc45QJUn312vIROsSXVUkShBp0mA&usqp=CAU)",backgroundSize:"cover",backgroundRepeat: 'no-repeat',backgroundPosition:"center"}}>
        <h1 style={{width:"100%", color:"white"}}>Signup</h1>
        <form  onSubmit={handleSignup}>
            <input style={{width:"98%", height:"50px",fontSize:"24px",marginTop:"5px"}} type="text"
            placeholder='enter your name' 
            value={name}
            onChange={(e)=> setName(e.target.value)} />
            <br />
            <input style={{width:"98%", height:"50px",fontSize:"24px",marginTop:"5px"}} type="email" 
            placeholder='enter your email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)} />
            <br />
            <input style={{width:"98%", height:"50px",fontSize:"24px",marginTop:"5px"}} type="password" 
            placeholder='enter your password' 
            value={pass}
            onChange={(e)=> setPass(e.target.value)}/>
            <br />
            <div className='Inputsubmit'>
                <b>{error}</b>
            <input style={{width:"98%", height:"50px",fontSize:"24px",marginTop:"5px",backgroundColor:"red",color:"black"}} type="submit" value="Submit" disabled={flag} />
            </div>
        </form>
        <div className='gotologin'>
           <p style={{ fontSize:"24px", color:"white"}}>
            Already have an account?{" "}
            <span>
              <Link style={{textDecoration:"none",color:"white"}} to="/login">Login</Link>
            </span>
          </p>
        </div>
    </div>
  )
}

export default Signup