import React from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

function DefaultNavigation() {
    return (
     <div className={styles.navBar}>
            <Link href='/' passHref>
                <a className={styles.logo} >LAIBU</a>
            </Link>
            <div className={styles.navList} >
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>
                        <Link href='/about'><a>About</a></Link>
                    </li >
                        <li className={styles.signInButton}>
                            <a onClick={(e) => { e.preventDefault(); window.location.replace('/api/auth/login') }} >
                                Login
                            </a>
                        </li>
                    <li className={styles.navLink}>
                        <Link href='/user/account'><a>Account</a></Link>
                    </li>
                </ul>
            </div>
        </div>)

}

export default DefaultNavigation
