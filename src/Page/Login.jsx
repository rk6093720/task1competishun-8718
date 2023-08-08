import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
    const [email,setEmail]= useState("");
    const [pass,setPass]= useState("");
    const [error,setError]= useState("");
    const [flag,setFlag]= useState("");
      const navigate = useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
      if(!email || !pass){
        setError("fill the login fields");
        return;
      }
      setError("");
      setFlag(true);
      signInWithEmailAndPassword(auth,email,pass)
      .then((res)=>{
        console.log(res.user.accessToken)
        setFlag(false);
        navigate("/")
      })
      .catch((err)=>{
        setFlag(false);
        setError(err.Message)
      })
    }
  return (
    <div className='login'>
        <h1>Login App</h1>
        <form onSubmit={handleLogin}>
            <input type="email"
            placeholder='enter your email'
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}/>
            <br />
            <input type="password"
            placeholder='enter your password' 
            value={pass}
            onChange={(e)=> setPass(e.target.value)} />

            <div className='inputSubmitlogin'>
                <b>{error}</b>
                <input type="submit" value="Submit"  disabled={flag} />
            </div>
        </form>
        <div className='notAccountgotosignup' >
        <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
    </div>
  )
}

export default Login