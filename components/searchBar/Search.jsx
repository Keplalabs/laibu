import React from 'react'
import styles from './Search.module.css'

const Search = () => {
    return (
        <form className={styles.searchForm}>
            <input id="searchInput" type="text" placeholder="Search Unit Code" className={styles.searchInput} />
        </form>
    )
}

export default Search
