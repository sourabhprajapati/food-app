import React, { useEffect, useState } from 'react'
import ResturantCard from '../ResturantCard/ResturantCard'
import "./body.css"
// import resList from '../utils/mockData'
import Shimmer from '../shimmer/Shimmer'

const Body = () => {
  const[listofResturant,setlistofResturant]=useState([])
  const[filterResturant,setfilterResturant]=useState([])
  const[searchText,setsearchText]=useState("");
  useEffect(()=>{
    getdata();
  },[])
  
  const getdata= async()=>{
      const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=26.9044744&lng=75.8325824");
      const json= await data.json();
      console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants
        );
      
      setlistofResturant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      setfilterResturant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  }
  if(listofResturant.length===0){
    return <Shimmer/>
  }
  return (
    <div className='body'>
      <div className='filter'>
        <div className="search">
            <input type="text" className='search-box' value={searchText} onChange={(e)=>{
              setsearchText(e.target.value)
            }} />
            <button onClick={()=>{
              //filter the resturant and show into the UI
             const filterdata= listofResturant.filter((res)=>{
                return res.name.toLowerCase().includes(searchText.toLowerCase())
              })
              setfilterResturant(filterdata)
            }}>search</button>
        </div>
         <button className='filter-btn' onClick={()=>{
           const filterdata=listofResturant.filter((res)=>{
               return(
                
                  res.avgRating>4
                
               )
              
           })
           setlistofResturant(filterdata)
         }}>Top Rated Restaurant</button>
      </div>
        <div className="container">
             {
              filterResturant.map((resturant)=>{
                return(<div key={resturant.info.id}>
                  <ResturantCard resData={resturant}/>
                </div>)
                   
               })
             }
        </div>
    </div>
  )
}

export default Body