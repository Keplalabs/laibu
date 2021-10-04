import React from 'react'
import styles from './Landing.module.css'
import Image from 'next/image'
import landingPic from '../../static/images/BoyReading.png'
import Search from '../searchBar/Search'

const Landing = () => {
    return (
        <div className={styles.firstSight}>
          <div className={styles.LandingImg}>
            <Image src={landingPic} alt="landing preview pic" />
          </div>

          <div className={styles.leftSection}>
            <div className={styles.tagText}>
              <h3> Your personal campus library </h3>
              <p className={styles.tagLine}>Never have to worry about notes again</p>
              <Search/>
            </div>

            <div className={styles.cta}> 
                <a href="#"> Sign Up!</a>
            </div>

          </div>
        </div>
    )
}

export default Landing
