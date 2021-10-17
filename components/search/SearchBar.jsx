import React, { useRef } from 'react'
import styles from './search.module.css'

const SearchBar = props => {
  const { handleSearch, searchTerm,handleSubmit, placeholder} = props.form
  const inputbox = useRef(null)

  // useEffect(() => {
  //   inputbox.current.focus()
  // }, [])

  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit}>

      <input
        autoComplete='off'
        ref={inputbox}
        autoFocus={props.focus}
        className={styles.searchInput}
        onChange={handleSearch}
        value={searchTerm}
        // autoFocus
        placeholder={`${placeholder}`}
        />
      {/* <img className='fa-search' src={searchIcon} alt='' /> */}
        </form>
    </div>
  )
}
export default SearchBar
