import React from "react";
import './Card.css';


function Card(props){
    return(
       <div className="containers">
           <img src={props.image} alt={props.alt}/>

           <div className="subcontainer_1">
           <p className="title">
               {props.name}
           </p>
           <p className="id">{props.id}</p>
           </div>
       </div>
    )
}
export default Card;