import React from 'react'
import "./menu.css"

const Landing = () => {
    return (
        <div className='landing'>
             <div id="text">
            <h1>The belly rules the mind</h1>
            <form>
            <input type="text" placeholder='search here...' ></input>
            <button>search</button>
            </form>
            </div>
          
            <div id="chef">
        <img src="https://content.presentermedia.com/content/animsp/00016000/16208/chef_cooking_with_pan_300_wht.gif"/>
        </div>
        
          

        </div>
    )
}

export default Landing
