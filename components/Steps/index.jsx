import React, { useState } from 'react'
import Step from './Step'
import { Header } from '../styledComponents/Header'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import styles from './steps.module.css'
import WithModal from '../Modal'
import { stepData } from './data'
import { Capitalize } from '../../utils/helpers';
function RegistrationSteps() {
    function handleFinish() {
        console.log('finished')
    }

    const { user } = useUser()
    const [state, setState] = useState(0)
    return (
        <WithModal disableClose={true}>
            <div className={styles.stepsContainer}>

            <h1 className={styles.stepsHeader}>Welcome {user ? Capitalize(user.nickname) : null}!</h1>
            <p className={styles.stepParagraph}>To offer you the most enjoyable experience we need some information from you</p>
            {   
                  <Step data={stepData} current={state} />
            }
            {/* sorry about tihs code,will try and do better here */}
            <div className={styles.stepButtons,state===0 ?styles.flexCenter:styles.flexBetween}>
                {state >= 1 ? <Button variant="outlined" onClick={() => setState(state => state - 1)}>Back</Button> : null}
                {state<3?<Button variant="outlined"  onClick={() => setState(state => state + 1)}>Next</Button>:null}
                {state == 3 ? <Button variant="contained" color="primary" onClick={handleFinish}>Finish</Button> : null}
            </div>
                  </div>
        </WithModal>
    )
}

export default RegistrationSteps
