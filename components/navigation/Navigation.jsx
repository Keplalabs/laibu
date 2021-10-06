
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';
import styles from './Navigation.module.css'
const Navigation = () => {
    const { user, isLoading: loading } = useUser();
    return (
        <div className={styles.navBar}>
            <Link href='/' passHref>
                <a className={styles.logo} >LAIBU</a>
            </Link>
            <div className={`${styles.navList} ${!user && loading ? 'loading' : 'loaded'}`}>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>
                        <Link href='/about'><a>About</a></Link>
                    </li >
                    {user &&
                        <li className={styles.navLink}>
                            <Link href='/dashboard'><a>Dashboard</a></Link>
                        </li>
                    }

                    {!user && !loading &&
                        <li className={styles.signInButton}>
                            <a onClick={(e) => { e.preventDefault(); window.location.replace('/api/auth/login') }} >
                                Login
                            </a>
                        </li>}

                    {user && (<li className={styles.navLink}>
                        <Link href='/user/account'><a>Account</a></Link>
                    </li>)}
                </ul>
            </div>
        </div>)
}
export default Navigation