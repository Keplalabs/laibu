import { useSelector,useDispatch } from 'react-redux';
import React from 'react'

function ConfirmSelection() {
    const course=useSelector(state=>state.selected.selectedCourse)
    const year=useSelector(state=>state.selected.selectedYear)
    const semester=useSelector(state=>state.selected.selectedSemester)
    return (
        <div>
            <h1>Confirm details</h1>
            <h3>Course : {course.name}</h3>
            <h3>Current Year : {year},</h3>
            <h3>Current Semester : {semester},</h3>
        </div>
    )
}

export default ConfirmSelection

