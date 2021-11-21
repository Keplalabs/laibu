import React, { useEffect, useState } from 'react'
import Step from './Step'
import { Header } from '../styledComponents/Header'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useSelector,useDispatch } from 'react-redux';
import {selectCourse} from '../../redux/selected/selectedActions'
import ConfirmSelection from './ConfirmSelection';
import { Button } from '@material-ui/core';
import styles from './steps.module.css'
import WithModal from '../Modal'
import { stepData } from './data'
import { Capitalize } from '../../utils/helpers';
function RegistrationSteps({detailsToUpdate}) {

    const dispatch = useDispatch()
    const courses=useSelector(state=>state.data.courses)
    let [currentData,setCurrentData] = useState({})
    let [filled,setFilled]=useState(false)
    let [state,setCurrentState] = useState(0)
    let [confirm,setConfirm] = useState(false)

    const { user } = useUser()
    function handleCourseSelecton(course){
        dispatch(selectCourse(course))
        // setCurrentState(state=>state+1)   
    }

    function handleFinish() {
        console.log('finished')
        // setCurrentState(state=>state+1)
        setConfirm(true)
    }
    function handleClickNext() {
        console.log('finished')
        if(state==detailsToUpdate.length-1)
        setConfirm(true)
        setCurrentState(state => state + 1)
        // setCurrentState(state=>state+1)
        setConfirm(true)
    }
    useEffect(()=>{
    const currentStep=stepData.filter(item=>item.id===state)
    console.log(currentStep)
    setCurrentData(currentStep[0])
},[state])
    return (
        <WithModal disableClose={true}>
            <div className={styles.stepsContainer}>

                {
                confirm && state==detailsToUpdate.length?<ConfirmSelection/>:(
                    <>
            <h1 className={styles.stepsHeader}>Welcome {user ? Capitalize(user.nickname) : null}!</h1>
            <p className={styles.stepParagraph}>To offer you the most enjoyable experience we need some information from you</p>
               <Step data={currentData} setFilled={setFilled} source={courses} callback={handleCourseSelecton} props={state,setCurrentState}/>
                    </>
               )}
               
            
            {/* i know this is ugly,forgive me for now*/}
            <div className={styles.stepButtons,state===0 ?styles.flexCenter:styles.flexBetween}>
                {state >= 1 ? <Button variant="outlined" onClick={() => setCurrentState(state => state - 1)}>Back</Button> : null}
                {state<=detailsToUpdate.length-1?<Button variant="contained" color="primary" disabled={!filled?true:false} onClick={handleClickNext}>Next</Button>:null}
                {confirm && state==detailsToUpdate.length&& <Button variant="contained" color="primary" onClick={handleFinish}>Confirm</Button>}

            </div>
                  </div>
        </WithModal>
    )
}

export default RegistrationSteps
