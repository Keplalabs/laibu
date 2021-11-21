import { useSelector,useDispatch } from 'react-redux';
import React from 'react'
import styles from './steps.module.css'
function ConfirmSelection() {
    const course=useSelector(state=>state.selected.selectedCourse)
    const year=useSelector(state=>state.selected.selectedYear)
    const semester=useSelector(state=>state.selected.selectedSemester)
    return (
        <div className={styles.confirmSelectionContainer}>
            <h1>Confirm details</h1>
            <p>Course 
            <h3>{course.name}</h3>
            <br/>
             </p>
            <p>Current Year
            <h3>{year}</h3>
            <br/>
             </p>
            <p>Current Semester 
            <h3>{semester}</h3>
            <br/>
             </p>
        </div>
    )
}

export default ConfirmSelection

