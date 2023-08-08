import React, {  useState } from 'react'

const FavouriteMovie = () => {

    const favourite= useState(JSON.parse(localStorage.getItem("bookmarked"))||[]);
    console.log(favourite[0])
  return (
    <>
               <h1>Favourite Movie</h1>
  <div className='favouriteMovie' style={{ width:"500px", height:"300px", display:"grid", gridTemplateColumns:"repeat(4,300px)", gridGap:"20px",marginLeft:"2px"}}>
        {
            favourite[0].map((item)=>{
                return <div className='moviecard' key={item.id} style={{ width:"100%",height:"100%",border:"1px solid black", marginTop:'2px'}}>
                <div className='images'>
                    <img style={{ width:"100%", height:"50%"}} src={item.images} alt="" />
                </div>
                <div className='names'>{item.names}</div>
            
                <div className='generic card'> {item.genrecards}</div>
                <div className='realsedate'>{item.releaseDate}</div>
           
            </div>
            })
        }
    </div>
    </>
  )
}

export default FavouriteMovie