import React, { useEffect, useState } from 'react'
import { clearError } from '../../redux/login/loginActions';
import { hideModal } from '../../redux/modal/modalActions';
import { useAppDispatch,useAppSelector } from '../../redux/hooks';

import styles from './Modal.module.css'
const WithModal = (props) => {
  const {disableClose=false}=props
  let isVisible = useAppSelector(state => state.modal.isVisible)
  const dispatch = useAppDispatch()
  const close = () => {
    if (disableClose)
    return
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
        <div className='w-full p-4' onClick={e => e.stopPropagation()}>
          {!disableClose&&<span className={styles.modalClose} onClick={close}>
            &times;</span>}
          {props.children}
        </div>
      </div>

    )
  )
};
export default WithModal
