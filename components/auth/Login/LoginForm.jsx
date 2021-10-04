
import styles from './login.module.css'
import React, { useState, useEffect } from 'react'
import { Button, LoginButton } from '../../styledComponents/Buttons'
import { Input } from '../../styledComponents/Inputs'
import PasswordRevealer from './PasswordReveal'

// BUG:
const LoginForm = ({ handleSubmit }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleToggle = () => {
    setShow(!show)
  }
  return (

    <div className={styles.loginFormContainer}>
      <form className={styles.loginForm} onSubmit={e => { e.preventDefault(); handleSubmit({ email: email, password: password }) }}>
        <Input onChange={e => setEmail(e.target.value)} value={email} required autoFocus type="email" placeholder='email' name="email" />
        <div className={styles.passwordInput}>
          <Input onChange={e => setPassword(e.target.value)} value={password} required type={!show ? "password" : "text"} placeholder='password' name="password" />
          <PasswordRevealer handleClick={handleToggle} show={show} />
        </div>
        <LoginButton type='submit'>Login</LoginButton>
      </form>
    </div>
  )
}
export default LoginForm
