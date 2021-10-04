import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/Image";
import { signIn } from "next-auth/client";
import google from '../../../public/icons/google.png'
/** My Facebook login button. */
import styles from './GoogleButtonstyles.module.css'

function GoogleLoginButton() {
  const dashboard = { callbackUrl: 'http://localhost:3000/dashboard' }
  const config = {
    text: "Sign in with Google",

  };

  return (
    <button onClick={() => (signIn("google"), { callbackUrl: dashboard })} className={styles.googleButton}>
      <div className={styles.googleIcon}>
        <Image src={google} alt='Google' />
      </div>
      <span>{config.text}</span>
    </button>
  )
}


export default GoogleLoginButton;