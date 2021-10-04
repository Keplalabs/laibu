// import { FacebookLoginButton,GithubLoginButton} from "react-social-login-buttons";
import { signIn } from "next-auth/client"
import GoogleLoginButton from '../../styledComponents/SocialIcons/GoogleButton'

import styles from './login.module.css'

function SocialLogin() {
    return (

        <div className={styles.socialButtonsContainer}>
            <GoogleLoginButton />
        </div>
    )
}

export default SocialLogin
