import React from "react"
import logo from "../../assets/images/logo.svg"
import Menu from "../menu"

const SideBar = () =>{
    return(
        <div>
            <img src={logo} alt="logo"/>
            <Menu/>

        </div>
    )
}

export default SideBar;