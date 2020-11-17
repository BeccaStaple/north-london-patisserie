import React from "react"
import HomePic from "./home-pic.png"
import Header from "../components/Header"
import ScrollText from "../components/ScrollText"
import '../App.css';



export default function Home() {
    return (
        <div >

            <Header />
            <img className="home-img" src={HomePic} alt="tart" />
            <ScrollText />
        </div>

    )
}