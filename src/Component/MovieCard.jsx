import React from 'react'
import { FaRegBookmark,FaHeart} from "react-icons/fa"
import { Link } from 'react-router-dom';
const MovieCard = ({item}) => {
    // const [watchlist,setWatchList]= useState([]);
    //  const favourite = useState(JSON.parse(localStorage.getItem('bookmarked')) || []);
   const handleBookmark=(item)=>{
    const favourite = JSON.parse(localStorage.getItem('bookmarked')) || [];
    // favorites.push(item);
    // localStorage.setItem('favorites', JSON.stringify(favorites));
    // console.log(item.id)
    let id = item.id;
    let temp = favourite.find(items=> items.id === id)
    console.log(temp)
    if(temp){
        alert("moviedata is already saved in the bookmarked")
    }else{
    let a=item;
    a.quantity=1;
    favourite.push(a);
    localStorage.setItem("bookmarked",JSON.stringify(favourite));
    alert("movie data is bookmarked")
    } 
  }
  const handleWatchlist=(item)=>{
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    let id = item.id;
    let temp = watchlist.find(items=> items.id === id)
    console.log(temp)
    if(temp){
        alert("moviedata is already saved in the watchlist")
    }else{
    let a=item;
    a.quantity=1;
    watchlist.push(a);
    localStorage.setItem("watchlist",JSON.stringify(watchlist));
    alert("movie data is watchlist")
    } 
  }
//   console.log(favourite)
return (
    <div className='moviecard' key={item.id} style={{ width:"100%",height:"100%",border:"1px solid black", marginTop:'2px'}}>
        <div className='images'>
            <img style={{ width:"100%", height:"50%"}} src={item.images} alt="" />
        </div>
        <div className='names' style={{ fontSize:"24px", }}>{item.names}</div>
    
        <div className='generic card'> {item.genrecards}</div>
        <button style={{ width:"100px",height:"50px",fontSize:"14px", backgroundColor:"red", color:"black",marginTop:"5px",marginLeft:"5px"}} onClick={()=>handleBookmark(item)}><FaRegBookmark/></button>
        <button style={{ width:"100px",height:"50px",fontSize:"14px", backgroundColor:"blue", color:"white",marginTop:"5px",marginLeft:"5px"}} onClick={()=> handleWatchlist(item)}><FaHeart/></button>
        <Link to={`/movie/${item.id}`}>
        <button style={{ width:"100px",height:"50px",fontSize:"14px", backgroundColor:"red", color:"black",marginTop:"5px"}}>MovieDetails</button>
        </Link>
    </div>
  )
}

export default MovieCard