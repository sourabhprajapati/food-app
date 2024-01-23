import React from 'react'
import "./Resturantcard.css"
import {CDN_URL} from "../utils/constant"
const ResturantCard = (props) => {
  const{resData}=props
  
  return (
    <div className='res-card'>
         <img  className="res-logo" src={CDN_URL+resData.info.cloudinaryImageId} alt="res-logo" srcset="" />
         <h3>{resData.info.name}</h3>
         <h4>{resData.info.cuisines.slice(0,3).join(",")}</h4>
         {/* <h4>{resData.info.availability.avgRating}</h4> */}
         <h4>{resData.info.costForTwo}</h4>
    </div>
  )
}

export default ResturantCard