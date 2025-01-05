import React from "react"
import "./filters.css";
import placedata from "../data/Placedata";
import Filtercards from "./Filtercards";
const FilterResults = (props) => {
  const displaycard  = (card)=>{
    return(
      <Filtercards
    datapic={card.datapic}
    key={card.name}
    name={card.name}
    location={card.location}
    placetags={card.placetags}
    price={card.price}
    category={card.category}
    
    />
    );
  }
  return (
    <div className="filterresults">
        
        <div className="placecards">
          {
            placedata.map(displaycard)
          }
        </div>
        
    </div>
  )
};

export default FilterResults;
{/* <div className="placecard">
            <div><img className="image" src="https://a0.muscache.com/im/pictures/d5962b48-8d1d-4dd0-bba6-101137cbe973.jpg?im_w=720&im_format=avif" alt="" /></div>
            <div className="info">
               <div className="line1"> <div className="place title">
                Hostel Name</div>
                <div className="place rating">&#x2B50;4.3</div></div>
               <div className="place location">Location </div>
               <div className="place tags">place tags</div>
                <div className="place price">Price</div>
            </div>
            </div> */}