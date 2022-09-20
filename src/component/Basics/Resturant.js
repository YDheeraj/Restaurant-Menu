import React, { useState } from "react";
import "./style.css";
import Menu from "./menuAPI";
import MenuCard from "./MenuCards";
import NavBar from "./Navbar";

const category= [...new Set(Menu.map((curele)=>{
    return  curele.category;
})),"All"];

console.log(category);


function Resturant(){

    const [data,setData]=useState(Menu);
    const [menulist,setMenulist]=useState(category);
   

    

    const filterItem=(category)=>{
        if(category==="All"){
            setData(Menu);
            return;
        }
        const updateItem=Menu.filter((ele)=>{
            return ele.category === category;
        });

        setData(updateItem);
    }


    return (
        <>
         <NavBar filterItem={filterItem} menulist={menulist}></NavBar>
        <MenuCard menu={data}></MenuCard>
        </>
    )
}

export default Resturant;