import React from "react"
import logo from "../../assets/images/logo.svg"
import Menu from "../menu"
import styles from './index.module.scss';

const LeftSideBar = () =>{
    return(
        <div className={styles._}>
            <div className={styles.__logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.__menu}>
                <Menu/>
            </div>
            

        </div>
    )
}

export default LeftSideBar;