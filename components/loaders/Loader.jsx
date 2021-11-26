import React from 'react'
import styles from './loaders.module.css'
import classNames from 'classnames/bind';
// import { CircleToBlockLoading } from 'react-loadingg';
// import { TransverseLoading } from 'react-loadingg';
let cx = classNames.bind(styles);
import { DisappearedLoading } from 'react-loadingg'
import { useSelector } from 'react-redux';
// import { MagicSpinner } from 'react-spinners-kit'
function Loader () {
  let loading=useSelector(state=>state.loader.loading)
  let bg=useSelector(state=>state.loader.bg)
  let classNames = cx(styles.loading, { 'dark-bg': loading },{[styles.loadingClosed]:!loading});
  return (
    <div className={classNames}>
      <DisappearedLoading size={100} color='skyblue' loading={loading} />
    </div>
  )
}

export default Loader
