import 'semantic-ui-css/semantic.min.css'
import "./Navbar.css"
import { Icon, Popup } from "semantic-ui-react"
import { Link } from "react-router-dom"


export default function Navbar() {


    return (

        <ul className="nav-items">
            <Link to="/">
                <li>
                    <Popup
                        trigger={<Icon
                            style={{
                                margin: "10px",
                                color: "white"
                            }}

                            size="big"
                            name="home"

                        />

                        }

                        content='Home'
                        position='right center'
                    />
                </li>
            </Link>


            <Link to="/about">
                <li>
                    <Popup
                        trigger={<Icon
                            style={{
                                margin: "10px",
                                color : "white"
                            }}

                            size="big"
                            name="info circle"
                        />}
                        content='About'
                        position='right center'
                    />

                </li>
            </Link>

            <Link to="/contact">
                <li>
                    <Popup
                        trigger={<Icon
                            style={{
                                margin: "10px",
                                color: "white"
                            }}
                            size="big"
                            name="mail"

                        />}
                        content='Contact us'
                        position='right center'
                    />
                </li>
            </Link>

                <li>
                    <Popup
                        trigger={<Icon
                            style={{
                                margin: "10px",
                                color: "white"
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
                            margin: "10px",
                            color: "white"
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