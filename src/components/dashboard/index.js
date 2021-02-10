import React from "react"
import Home from "../home"
import LeftSideBar from "../leftSideBar"
import RightSideBar from "../rightSideBar";
import styles from './index.module.scss';

const DashBoard = () => {
    return (
        <div className={styles._}>
            <div className={styles.__left_bar}><LeftSideBar/></div>
            <div className={styles.__home}> <Home/></div>
            <div className={styles.__right_bar}><RightSideBar/></div>
            
           
            
        </div>
    )
}

export default DashBoard