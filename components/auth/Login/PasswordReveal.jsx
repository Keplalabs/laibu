import React from 'react';
import styles from './login.module.css'
const PasswordRevealer = ({ show, handleClick }) => {


  return (
    <span className={styles.PasswordRevealer}>
      <a className={styles.PasswordRevealerButton} onClick={handleClick}>{!show ? "show" : "hide"}</a>
    </span>
  );
};

export default PasswordRevealer