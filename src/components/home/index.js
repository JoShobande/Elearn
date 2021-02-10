import React from "react"
import cardImageOne from "../../assets/images/cardImageOne.svg"
import styles from './index.module.scss';


const Home = () => {
    return(
        <div className={styles._}>
            <p>Hi Josephine!</p>
            <h1>What will you learn today?</h1>
            <div className={styles.__home_card}>
                <div className={styles.__image}>
                    <img src={cardImageOne} alt=""/>
                </div>
                <div className={styles.__text}>
                    <h2>Artificial Intelligence for Marketing</h2>
                    <p>Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations.</p>
                    <button>Learn Now</button>
                </div>
            </div>
        </div>
    )
}

export default Home;