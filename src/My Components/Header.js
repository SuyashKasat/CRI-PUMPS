import React from 'react'
import img from "./logo.png";

export const Header = () => {
    let style={
        height:"170px",
     maxWidth:"80%"
    }
    return (
        <div className="text-center">
            
             <img src={img} alt="C.R.I. FLUID SYSTEMS" style={style}/> 
        </div>
    )
}
