import React, {useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import YouTube,{YouTubeProps} from 'react-youtube';
const SingleMovie = () => {
    const {id} = useParams();
    const [movieData,setMovieData]= useState([]);
    const [MovieDetails,setMovieDetalis]= useState({});
    const [rate,setRate]= useState(0);
   const [play,setPlay] = useState(false);
    const getMovieDetails=async()=>{
      try {
        let res = await fetch("https://movieapp-ugd4.onrender.com/movies");
        let data = await res.json();
        setMovieData(data)
      } catch (error) {
        console.log(error);
      }
    }
    
  const handlePlay=()=>{
    setPlay(true)
    alert("Movie is Playing")
  }
  const onPlayerReady= (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
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
    <>
    
    <div className='movieDetalis' style={{border:"1px solid black",marginTop:"5px",width:"500px", height:"500px",margin:"auto" }}>
        <div className="images">
            <img style={{ width:"100%", height:"100%"}} src={MovieDetails.images} alt="" />
        </div>
        <div className="names" style={{fontWeight:"bold", fontSize:"24px"}}>
            {MovieDetails.names}
        </div>
        <div className='genre' style={{fontSize:"18px", fontFamily:"sans-serif"}}>
            {MovieDetails.genrecards}
        </div>
        <div style={{fontSize:"18px", fontFamily:"sans-serif"}}>{MovieDetails.Description}</div>
        <div>{MovieDetails.releaseDate}</div>
        <Container>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => {setRate(givenRating);}}
                        />
                        <Rating>
                            <FaStar 
                                color={
                                    givenRating < rate || givenRating === rate
                                        ? "000"
                                        : "rgb(192,192,192)"
                                }
                                
                            />
                        </Rating>
                    </label>
                );
            })}
        </Container>
           <button style={{ width:"200px",height:"50px", backgroundColor:"red", fontSize:"24px", color:"black"}} onClick={handlePlay}>PLay Now</button>
           { play && (
            <YouTube style={{ width:"800px", height:"600px"}} videoId={MovieDetails.videolink} opts={opts} onReady={onPlayerReady} />
           )}
          
    </div>
    </>
  )
}

export default SingleMovie;


export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 50px;
font-size: 24px;

`
export const Radio = styled.input`
display: none;
background-color:black
`
export const Rating = styled.div`
cursor: pointer;

`
// https://youtu.be/yFrxzaBLDQM
// play && ( 
//     <video controls  autoPlay style={{ width:"700px", height:"500px"}} >
//         <source style={{ width:"700px", height:"500px"}} src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"  type="video/mp4"/>
//     </video>