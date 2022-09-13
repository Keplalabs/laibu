import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
// import { signIn } from "next-auth/client";
import google from '../../../public/icons/google.png'
/** My Facebook login button. */
import styles from './GoogleButtonstyles.module.css'

function GoogleLoginButton({handleClick}) {
  const config = {
    text: "Sign in with Google",

  };

  return (
    <button onClick={handleClick} className='flex justify-center w-full py-3 px-8 items-center border-2 bg-white rounded-md  shadow-md '>
      <div className={styles.googleIcon}>
        <Image src={google} alt='Google' />
      </div>
      <span>{config.text}</span>
    </button>
  )
}


export default GoogleLoginButton;