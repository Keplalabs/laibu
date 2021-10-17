import React from 'react'
import styles from './Landing.module.css'
import Image from 'next/image'
import landingPic from '../../public/images/BoyReading.png'
import Search from '../search/Search'
import { LandingHeader } from '../styledComponents/Header'
import { useSelector, useDispatch } from "react-redux";


const Landing = () => {


    const units = useSelector((state) => state.data.units);

    return (
        <div className={styles.firstSight}>
          <div className={styles.LandingImg}>
            <Image src={landingPic} alt="landing preview pic" />
          </div>

          <div className={styles.rightSection}>
            <div className={styles.tagContainer}>
            <h1 className={styles.tagHeader}>Welcome to <LandingHeader>Laibu</LandingHeader>
              </h1>
              <p className={styles.tagLine}>A place where you can access all your course notes and more  </p>
            <Search  source={units} placeholder="Search Unit code or Name"/>
            </div>
          </div>
        </div>
    )
}

export default Landing
