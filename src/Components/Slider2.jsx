import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Slider2 = () => {
    return (
       <section id="slider2">
           <article>
               <div className='cards' style={{background:"#fbfbfb" ,hieght:"300px"}}>
                  
                 
                  <div id="card2" >

                  <Link to= "/menu">
                  <p>c</p>
                  </Link>
                    
                  
                  </div>
                  <div id="para" >
                  

                  <h1 id="fooddelivery"> Order Happiness from Your fav Restuarent </h1>
                  <p style={{fontSize:"20px",
                  color: "-webkit-linear-gradient(#ff0000, #6f6060)",
                  }} >The belly rules the mind</p>
                  
                  </div>
                
                
                 
                
                  
               </div>
               
                 
               
              
           </article>
       </section>
    )
}

export default Slider2
