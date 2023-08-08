import React, {useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const SingleMovie = () => {
    const {id} = useParams();
    const [movieData,setMovieData]= useState([]);
    const [MovieDetails,setMovieDetalis]= useState({});
    const [rate,setRate]= useState(0);

    const getMovieDetails=async()=>{
      try {
        let res = await fetch("https://movieapp-ugd4.onrender.com/movies");
        let data = await res.json();
        setMovieData(data)
      } catch (error) {
        console.log(error);
      }
    }
    const handleRating=(rating)=>{
        {[...Array(5).map(item => (item,index)=>{

        })]

    }

    useEffect(()=>{
        if(movieData.length ===0)
        {
            getMovieDetails()
        }
        
    },[movieData.length])
    useEffect(()=>{
        console.log(id)
        if(id){
            const temp = movieData.find((item) => {
                return item.id === Number(id)
            })
            console.log(temp)
            temp && setMovieDetalis(temp)
        }
    },[id, movieData])
   console.log(movieData, MovieDetails)
  return (
    <div className='movieDetalis'>
        <div className="images">
            <img src={MovieDetails.images} alt="" />
        </div>
        <div className="names">
            {MovieDetails.names}
        </div>
        <div className='genre'>
            {MovieDetails.genrecards}
        </div>
        <div>{MovieDetails.Description}</div>
        <div>{MovieDetails.releaseDate}</div>
        <div className='rating'>
          <label ></label>
        <button onClick={()=> handleRating(MovieDetails.rates)}>
            <FaRegStar/>
        </button>
        </div>
    </div>
  )
}

export default SingleMovie;