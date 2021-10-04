import LoginForm from './LoginForm'
import WithModal from '../../Modal'
import styles from './login.module.css'
import { Header } from '../../styledComponents/Header'
import SocialLogin from './SocialLogin'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserFailure, login, setCurrentUser } from '../../../redux/login/loginActions'
import { signIn, useSession } from 'next-auth/client'
import ErrorParagraph from '../../styledComponents/ErrorParagraph'
import { hideModal } from '../../../redux/modal/modalActions'

const Login = () => {
  const error = useSelector(state => state.auth.error)
  const [session, loading] = useSession()
  const dispatch = useDispatch()

  const handleSubmit = async (formData) => {
    const { email, password } = formData
    const res = await signIn('credentials', { email, password, callbackUrl: '/dashboard', redirect: false })
    if (res.error) {
      dispatch(fetchUserFailure(res.error))
    }
    else {
      dispatch(hideModal())
      if (session) dispatch(setCurrentUser(session.user))

    }
  }

  return (
    <WithModal>
      <div className={styles.loginContainer}>
        <div className={styles.headerContainer}>
          <Header className={styles.loginHeader}>Sign in</Header>
          <span><Link href='signup'><a className='link'>Sign up</a></Link> instead?</span>
        </div>
        {error && <ErrorParagraph>{error}</ErrorParagraph>}
        <LoginForm handleSubmit={handleSubmit} />
        <SocialLogin />
      </div>
    </WithModal>
  )
}

export default Login
