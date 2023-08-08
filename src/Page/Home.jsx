import React, { useEffect, useState } from 'react'
import MovieCard from '../Component/MovieCard';
import Search from '../Component/Search';
const Home = () => {
       const [moviedata,setMovieData]= useState([]);
      const getData= async()=>{
            try {
                let res = await fetch("https://movieapp-ugd4.onrender.com/movies");
                let data = await res.json();
                console.log(data)
                setMovieData(data)
            } catch (error) {
                console.log(error);
            }
      }
 
    useEffect(()=>{
         getData()
    },[])
  return (
    <div className='home' style={{width:"1200px", height:"100%",margin:"auto"}}>
        <h1> Movies</h1>
        <Search moviedata={moviedata} setMovieData={setMovieData} getData={getData}/>
        <div className='gridCard' style={{width:"100%", height:"100%", display:"grid", gridTemplateColumns:"repeat(3, 300px)", gridGap:"20px",marginLeft:"97px"}}>
        {
            moviedata.map((item , index)=>{
                return <MovieCard item={item} index={index+1} key={item.id} />
            })
        }
        </div>     
    </div>
  )
}
export default Home