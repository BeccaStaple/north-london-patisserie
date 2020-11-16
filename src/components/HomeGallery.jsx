import React from "react"
import BlueberryCake from "./blueberry-cake.png"
import BrownCake from "./brown-cake.jpg"
import StrawberryCake from "./strawberry-cake.jpg"

export default function HomeGallery() {
    return(
        <div className="home-gallery">
            <img className="home-pic" src={BlueberryCake} alt="blueberry cake"/>
            <img className="home-pic" src={BrownCake} alt="brown cakw"/>
            <img className="home-pic" src={StrawberryCake} alt="strawberry cake"/>

        </div>
    )
} 