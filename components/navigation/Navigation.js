
import Link from 'next/link'
import Image from 'next/Image'
import styled from 'styled-components'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './Navigation.module.css'
const Button = styled.button`
    padding:1rem;
    color:inherit;
    border:none;
border-radius:15px;
    background-color:${({ theme }) => theme.colors.accent}
`
const Navigation = () => {
    const [session, loading] = useSession()
    return (
        <div className={styles.navBar}>
            <Link href='/' passHref>
                <a className={styles.logo} >LAIBU</a>
            </Link>
            <div className={`${styles.navList} ${!session && loading ? 'loading' : 'loaded'}`}>
                <li className={styles.navLinks}>
                    <li>
                        <Link href='/about'><a>About</a></Link>
                    </li>
                    {session &&
                        <li>
                            <Link href='/dashboard'><a>Dashboard</a></Link>
                        </li>
                    }

                    {!session && !loading &&
                        (<li>
                            <Link href='/api/auth/signin' >
                                <a onClick={e => { e.preventDefault(); signIn() }}>Login</a>
                            </Link>
                        </li>)}
                    {session && (<li>
                        <Link href='/api/auth/signout' >
                            <a onClick={e => { e.preventDefault(); signOut() }}>Logout</a>
                        </Link>
                    </li>)}
                </li>
                {!session && !loading &&
                    <li className={styles.signupButton}>
                        <Link href='/auth/signup'>
                            <a>
                                Sign Up
                            </a>
                        </Link>
                    </li>}
            </div>
        </div>)
}
export default Navigation