import React from 'react'
import img from "./3.png"
export const Main2 = () => {
    let style2={
        backgroundColor:"rgb(245, 245, 195)"
    }
    let style={
    fontSize:"16px",
    }
    let anotherstyle={
        height:"400px",
        width:"100%"
        }
    let style1={
        height:"3px",
        color:"red",
        alignment:"center",
        fontSize:"16px",
    }


    
    return (
        
        <div className="text-center" style={style2}>
            <p style={style}>
                <br/>
                INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN AN CUMULATIVE SAVING OF MORE 
                THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </p>
            <img src={img} alt="pumps" style={anotherstyle}/>
         
            <p>
              <br/>
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
            </p>
            <div className="conatiner">
            <hr style={style1}/></div>
        </div>
    )
}
