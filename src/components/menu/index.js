import React from "react"
import homeMenuIcon from "../../assets/images/homeMenuIcon.png"
import courseMenuIcon from "../../assets/images/courseMenuIcon.svg"
import favouriteMenuIcon from "../../assets/images/favouriteMenuIcon.svg"
import testMenuIcon from "../../assets/images/testMenuIcon.svg"
import achMenuIcon from "../../assets/images/achMenuIcon.svg"
import certMenuIcon from "../../assets/images/certMenuIcon.svg"
import settingsMenuIcon from "../../assets/images/settingsMenuIcon.svg"
import styles from './index.module.scss';


const menuItems = [
    {
        icon: homeMenuIcon,
        title: "Home"
    },
    {
        icon: courseMenuIcon,
        title: "My Courses"
    },
    {
        icon: favouriteMenuIcon,
        title: "Favourite"
    },
    {
        icon: testMenuIcon,
        title: "Test"
    },
    {
        icon: achMenuIcon,
        title: "Achievements"
    },
    {
        icon: certMenuIcon,
        title: "Certificates"
    },
    {
        icon: settingsMenuIcon,
        title: "settings"
    }
]

const Menu = () =>{
    return(
        <div>
            {
                menuItems.map((menuItem)=>{
                   return (
                            <div className={styles._}>
                               
                                    <img src={menuItem.icon} alt="icon"/>
                                    <p>{menuItem.title}</p>
                                
                               
                            </div>
                          )
                })
            }
        </div>
    )
}

export default Menu;