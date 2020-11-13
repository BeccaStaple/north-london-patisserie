import React from "react"
import Logo from "./N7-logo-v4-clipped.png"

export default function Header() {
    return (
        <div>
            <img className="logo" src={Logo} alt="logo"/>
            <h1 className="tagline tracking-in-expand">North London Patisserie</h1>
        </div>
    )
}