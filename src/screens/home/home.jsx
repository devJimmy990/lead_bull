// import React from 'react';
import styles from './style.module.css';
import bgImage from './../../assets/bg.png'; // Adjust the path based on your folder structure

const Home = () => {
    return (
        <div className={`${styles.home} position-static t-0`} style={{
            backgroundImage: `url(${bgImage})`,
            width: "100%",
            minHeight: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <video
                width={"100%"} height={"100px"}
                className={styles.background_video}
                autoPlay loop muted playsInline controls
                src="https://www.w3schools.com/html/mov_bbb.mp4" />
        </div>
    );
}

export default Home;
