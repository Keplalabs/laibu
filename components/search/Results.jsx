import React from 'react'
import styles from './search.module.css'

function Results (props) {
  const { handleClose, results, desc } = { ...props.props }
  return (
    <div className={styles.resultsContainer}>
      <ul className="p-2 flex w-full flex-col rounded-xl font-sans bg-white justify-center items-center">
        {results.map((el, i) => (
            <li key={i} onClick={() => handleClose(el)} className="flex p-2  flex-col cursor-pointer hover:bg-slate-100 border-b-2 w-full border-zinc-300 items-center justify-center">
              <p className='text-sm font-medium text-slate-900'>{el['code']}</p>
              <p className='text-sm break-words text-slate-500 truncate'>
              {el[desc]}
              </p>
            </li>
        ))}
      </ul>
    </div>
  )
}
export default Results
