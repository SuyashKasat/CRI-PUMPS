import React from 'react'
import img from "./1.png";
import img1 from "./2.png";
import img2 from "./3.png"
export const Main = () => {
    let style={
         height:"600px",
         alignment:"left"
    }
        let anotherstyle={
            alignment:"center",
            height:"300px",
            width:"100%"
            
          
        }
        
    return (
        
            <div className="row">
                <div className="col-sm">
                   
                      <img  src={img}  alt="TROPHY 1" style={style}/>
                   
                      </div>

                      <div className="col-sm">
                       <h6><b>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b> </h6>
                       <ul>
                           <li>
                               C.R.I.'s energy efficient products are well recognized by various Government Instituitons,
                               as trustworthy products for various projects across the globe to save energy.
                           </li>
                           <li>
                                C.R.I. is the highest contributor in the country for the projects of EESL(Energy
                                Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy
                                efficient smart pumps with IoT enabled control panel.
                           </li>
                       </ul>
                       <img  src={img1}  alt="AWARD "  style={anotherstyle}/>
                       <p>
                           Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G.
                           Selvaraj,Joint Managing Director of  C.R.I. Group received the award from Smt. Sumitra Mahajan,
                           Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                       </p>
                       </div>
                       </div>


                    
                   
            
               

            
                       
          
                       
           
        
       
    )
}
