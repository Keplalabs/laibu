import React from 'react'
import styles from './Search.module.css'

const Search = ({placeholder}) => {
    return (
        <form className={styles.searchForm}>
            <input id="searchInput" type="text" placeholder={placeholder} className={styles.searchInput} />
        </form>
    )
}

export default Search
