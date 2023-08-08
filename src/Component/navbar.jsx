import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../Page/Logout'
const navbar = () => {

  return (
    <div className='navbar' >
        <div className="container" style={{ display:'flex', width:"100%", height:"90px", backgroundColor:"teal",fontSize:"24px", alignItems:"center", justifyContent:"space-between"}}>
            <div className="left" style={{width:"40%"}}>
                <h1><Link style={{textDecoration:"none",color:"white"}} to="/">MovieApp</Link></h1>
            </div>
            <div className="right" style={{width:"60%", display:'flex', justifyContent:"space-evenly", color:"white", fontSize:"24px"}}>
                <div className='linksignup' style={{color:"white"}}>
                <Link style={{textDecoration:"none",color:"white"}} to="/signup">
                    Signup
                </Link>
                </div>
                <div className='linklogin' style={{ textDecoration:"none"}}>
                <Link style={{textDecoration:"none",color:"white"}} to="/login">
                    Login
                </Link>
                </div>
                <div className='favouritemovie' style={{ textDecoration:"none"}}>
                <Link style={{textDecoration:"none",color:"white"}} to="/favouriteMovie">
                favouriteMovie
                </Link>
                </div>
                <div className='favouritemovie' style={{ textDecoration:"none"}}>
                <Link style={{textDecoration:"none",color:"white"}} to="/watchlist">
                watchlist
                </Link>
                </div>
                
                <div className='linklogin' style={{ textDecoration:"none" , fontSize:"24px"}}>
                  <Logout style={{ textDecoration:"none" , fontSize:"24px"}}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default navbar