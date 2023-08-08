import React, {  useState } from 'react'

const Search = ({moviedata,setMovieData,getData}) => {
    const [searchvalue,setSearchValue]= useState("");
    
    const handleSearch=()=>{
        if(searchvalue === ""){
            setMovieData(moviedata)
        }
      const a =moviedata.filter((item) =>{
          return item.names.toLowerCase() === searchvalue.toLowerCase();
      })
      setMovieData(a)
      setSearchValue("")
      console.log(searchvalue,a,"mo",moviedata)
    }
    const handleRest=()=>{
      getData()
    }
    // console.log(text)
  
  return (
    <div className='search'>
         <input type="text"
         value={searchvalue}
         onChange={(e)=> setSearchValue(e.target.value)}
         placeholder='enter the search by the movie name' />
         <button onClick={handleSearch}>Search</button>
         <button onClick={()=>handleRest()}>Reset</button>
    </div>
  )
}

export default Search