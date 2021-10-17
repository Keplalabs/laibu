import React, { useEffect, useState } from 'react'
import Step from './Step'
import { Header } from '../styledComponents/Header'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useSelector,useDispatch } from 'react-redux';


import { Button } from '@material-ui/core';
import styles from './steps.module.css'
import WithModal from '../Modal'
import { stepData } from './data'
import { Capitalize } from '../../utils/helpers';
function RegistrationSteps({detailsToUpdate}) {
    const dispatch = useDispatch()
    const courses=useSelector(state=>state.data.courses)
    let [currentData,setCurrentData] = useState({})
    let [state,setCurrentState] = useState(0)
    const { user } = useUser()
    function handleFinish() {
        console.log('finished')
    }

    useEffect(()=>{
    const currentStep=stepData.filter(item=>item.id===state)
    setCurrentData(currentStep[0])
},[state])
    return (
        <WithModal disableClose={true}>
            <div className={styles.stepsContainer}>

            <h1 className={styles.stepsHeader}>Welcome {user ? Capitalize(user.nickname) : null}!</h1>
            <p className={styles.stepParagraph}>To offer you the most enjoyable experience we need some information from you</p>
            {   
                  <Step data={currentData} source={courses} />
            }
            {/* sorry about tihs code,will try and do better here */}
            <div className={styles.stepButtons,state===0 ?styles.flexCenter:styles.flexBetween}>
                {state >= 1 ? <Button variant="outlined" onClick={() => setCurrentState(state => state - 1)}>Back</Button> : null}
                {state<detailsToUpdate.length-1?<Button variant="outlined"  onClick={() => setCurrentState(state => state + 1)}>Next</Button>:null}
                {state == detailsToUpdate.length-1 ? <Button variant="contained" color="primary" onClick={handleFinish}>Finish</Button> : null}
            </div>
                  </div>
        </WithModal>
    )
}

export default RegistrationSteps
