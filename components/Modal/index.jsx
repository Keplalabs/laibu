import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../redux/login/loginActions';
import { hideModal } from '../../redux/modal/modalActions';


import styles from './Modal.module.css'
const WithModal = (props) => {
  let isVisible = useSelector(state => state.modal.isVisible)
  const dispatch = useDispatch()
  const close = () => {
    dispatch(hideModal())
    dispatch(clearError())
  }

  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        close();

        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return (!isVisible ? null :
    (

      <div className={styles.modal} onClick={() => close()}>
        <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
          <span className={styles.modalClose} onClick={close}>
            &times;</span>
          {props.children}
        </div>
      </div>

    )
  )
};
export default WithModal
