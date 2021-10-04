
import Link from 'next/link'
import Image from 'next/Image'
import styled from 'styled-components'
import { signOut, useSession } from 'next-auth/client'
import styles from './Navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../redux/modal/modalActions'
import { Button } from '../styledComponents/Buttons'
// import { logout } from '../../redux/login/loginActions'
const Navigation = () => {
    const [user, loading] = useSession()
    // const user= useSelector(state => state.auth.user)
    // const loading= useSelector(state => state.auth.loading)
    // const user= useSelector(state => state.auth.authenticated)
    const dispatch = useDispatch()
    return (
        <div className={styles.navBar}>
            <Link href='/' passHref>
                <a className={styles.logo} >LAIBU</a>
            </Link>
            <div className={`${styles.navList} ${!user && loading ? 'loading' : 'loaded'}`}>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href='/about'><a>About</a></Link>
                    </li>
                    {user &&
                        <li>
                            <Link href='/dashboard'><a>Dashboard</a></Link>
                        </li>
                    }

                    {!user && !loading &&
                        <li >
                            <Button className={styles.signInButton} onClick={() => dispatch(showModal())}>
                                Login
                            </Button>
                        </li>}

                    {user && (<li>
                        <Link href='/api/auth/signout' >
                            <a onClick={e => { e.preventDefault(); signOut() }}>Logout</a>
                        </Link>
                    </li>)}
                </ul>
            </div>
        </div>)
}
export default Navigation