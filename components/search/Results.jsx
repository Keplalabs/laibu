import React from 'react'
import Button from '@material-ui/core/Button'
import styles from './search.module.css'

function Results (props) {
  const { handleClose, results, desc } = { ...props.props }
  return (
    <div className={styles.resultsContainer}>
      <ul className={styles.resultsList}>
        {results.map((el, i) => (
          <Button key={i} onClick={() => handleClose(el)}>
            <li className={styles.singleResult}>
              <small className='dark-grey'>{el['code']}</small>
              {el[desc]}
            </li>
          </Button>
        ))}
      </ul>
    </div>
  )
}
export default Results
