import React from 'react'
import Shimmer from './shimmer/Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from './utils/useRestaurantMenu';

const RestaurantMenu = () => {
   
    const {resId}=useParams();
    
    const resInfo=useRestaurantMenu(resId);
   
    if(resInfo===null){
        return <Shimmer/>
    }
    const{name,cuisines,cloudinaryImageId,costForTwoMessage}= resInfo?.card[0]?.card?.info;
    const {itemCard}= resInfo?.card[0]?.card?.info;
    if(resInfo===null){
        return <Shimmer/>
    }
  return (
      <div className='menu'>
       <h1>{name}</h1>
       <h2>{cuisines}</h2>
       <h3>{costForTwoMessage}</h3>
       <ul>
         {itemCard.map((item)=>{
               return(
                <>
                    <li>{item.card.info.name}</li>
                </>

               )
         })}
       
       </ul>

      </div>
  )
}

export default RestaurantMenu