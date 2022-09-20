import React, { useState } from "react";
import "./style.css";
import Menu from "./menuAPI";

function MenuCard(props){

console.log(props.menu[0].id);

    return (
        <>
        <section className="main-card--cointainer">
        {
            props.menu.map((ele)=>{
                const {id,category,description,image,name}=ele
                return(
                <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h1 className="card-title">{name}</h1>
                    <span className="card-description subtle">{description}</span>
                    <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className="card-media"></img>
                <span className="card-tag subtle">Order Now</span>
              </div>
          </div>
                )
            })
        }
       </section>
        </>
    )
}

export default MenuCard;