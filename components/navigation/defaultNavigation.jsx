import React from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

function DefaultNavigation() {
    return (
     <div className={styles.navBar}>
            <Link href='/' passHref>
                <a className={styles.logo} >Laibu</a>
            </Link>
            <div className={styles.navList} >
                <ul className="text-purple-800 flex flex-row p-2 items-center">
                    <li>
                        <Link href='/about'><a>About</a></Link>
                    </li>
                        <li>
                            <a onClick={(e) => { e.preventDefault(); window.location.replace('/api/auth/login') }} >
                                Login
                            </a>
                        </li>
            
                </ul>
            </div>
        </div>)

}

export default DefaultNavigation
