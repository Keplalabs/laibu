import { useAppSelector,useAppDispatch } from '../../redux/hooks';
import React from 'react'
import styles from './steps.module.css'
function ConfirmSelection() {
    const username=useAppSelector(state=>state.selected.selectedUserName)
    const course=useAppSelector(state=>state.selected.selectedCourse)
    const year=useAppSelector(state=>state.selected.selectedYear)
    const semester=useAppSelector(state=>state.selected.selectedSemester)
    return (
        <div className={styles.confirmSelectionContainer}>
            <h1>Confirm details</h1>
            <div>
            Username 
            <h3>{username}</h3>
            <br/>
             </div>
            <div>Course 
            <h3>{course.name}</h3>
            <br/>
             </div>
            <div>Current Year
            <h3>{year}</h3>
            <br/>
             </div>
            <div>Current Semester 
            <h3>{semester}</h3>
            <br/>
             </div>
        </div>
    )
}

export default ConfirmSelection

