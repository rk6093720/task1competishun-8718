import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import { auth } from '../FirebaseConfig'
import Logout from './Logout'
import FavouriteMovie from '../Component/FavouriteMovie'
import WatchList from '../Component/WatchList'
import SingleMovie from './SingleMovie'

const MainRoutes = () => {
    const [userName,setUserName]= useState("");
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
            setUserName(user.displayName)
        }else{
            setUserName("")
        }
      })
    },[])
  return (
    <div className="mainRoutes">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/logout' element={<Logout/>}/>
        <Route path="/" element={<Home name={userName} />} />
        <Route path='/favouriteMovie' element={<FavouriteMovie/>}/>
        <Route path='/watchlist' element={<WatchList/>}/>
        <Route path='/movie/:id' element={<SingleMovie/>}/>
      </Routes>
   
  </div>
  )
}

export default MainRoutes