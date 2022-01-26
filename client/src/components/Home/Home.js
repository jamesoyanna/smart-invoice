import React from 'react'
import styles from './Home.module.css'
import BannerImg from '../../images/banner.JPG';
const Home = () => {
   
    return (
      <div className={styles.pageContainer}>
        <img src={BannerImg} alt="Banner Img" />
        <section className={styles.hero}>

          <div className={styles.imgContainer}></div>
        </section>
      </div>
    );
}

export default Home
