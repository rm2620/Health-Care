import React from "react";

function Impact(props){
    return(
   
      <div className="row no-gutters container ">
      <div className="col align-item-center ">
      <img className="image" src={props.image} alt="..." ></img>
      </div>
      <div className="col ">
      <h2 className="secondtext1">{props.text}</h2>
      </div>
      </div>


    )
}
export  default Impact;