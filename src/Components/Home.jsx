import React from 'react'
import "./Component.css"
import Footer from './Footer'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Slider3 from './Slider3'

const Home = () => {
    return (
        <section id='slide'>
            <article>
                <div classname="slider1">
                    <Slider1/>
                </div>
                <div classname="slider2">
                    <Slider2/>
                </div>
                <div classname="slider3">
                    <Slider3/>
                </div>
                <div>
                    <Footer/>
                </div>
            </article>

        </section>
    )
}

export default Home
