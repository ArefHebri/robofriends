import React from "react";

const Card = ({id , name , email})  =>{
    return (
        <div className='tc bg-light-green br3 dib grow pa3 ma2 bw2 shadow-5'>
            <img src={`https://robohash.org/${name}?200x200`}  alt="card img"/>
            <h1> {name}</h1>
            <h1> {email}</h1>
        </div>
      );
}

export default Card;