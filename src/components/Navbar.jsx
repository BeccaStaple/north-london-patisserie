import 'semantic-ui-css/semantic.min.css'
import "./Navbar.css"
import React from "react"
import { Icon, Popup } from "semantic-ui-react"

export default function Navbar() {
    return (
        <ul className="nav-items">
            <li>
                
                <Popup
                    trigger={<Icon
                        style={{
                            margin: "10px"
                        }}
                        size="big"
                        name="home"
                    />}
                    content='Home'
                    position='right center'
                />
            </li>
            <li>
            <Popup
                    trigger={<Icon
                        style={{
                            margin: "10px"
                        }}
                        size="big"
                        name="info circle"
                    />}
                    content='About'
                    position='right center'
                />
                
            </li>
            <li>
            <Popup
                    trigger={<Icon
                        style={{
                            margin: "10px"
                        }}
                        size="big"
                        name="mail"
                    />}
                    content='Contact us'
                    position='right center'
                />
            </li>
            <li>
            <Popup
                    trigger={<Icon
                        style={{
                            margin: "10px"
                        }}
                        size="big"
                        name="facebook"
                    />}
                    content='Check out our facebook page'
                    position='right center'
                />
                
            </li>
            <li>
            <Popup
                    trigger={<Icon
                        style={{
                            margin: "10px"
                        }}
                        size="big"
                        name="instagram"
                    />}
                    content='Check out our instagram'
                    position='right center'
                />
               
            </li>



        </ul>
    )
}