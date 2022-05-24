import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Slider1 = () => {

    return (
        <section id="slider1">
        <article>
            <div className='cards'>
               <div id="card1">
                   <h1 id="fooddelivery1">Click,Pick and Eat 
               </h1>
               <p id="foodclk">Wake up its a FOOD o'clock</p> 
               <Link to="/landingpage" >
               <button id="slide1btn" >get started here</button></Link>
               
              
               </div>
             
             
               
            </div>
            
              
            
           
        </article>
    </section>
       
    )
}

export default Slider1
