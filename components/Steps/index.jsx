import React, { useEffect, useState } from "react";
import Step from "./Step";
import { useSelector, useDispatch } from "react-redux";
import { selectCourse } from "../../redux/selected/selectedActions";
import ConfirmSelection from "./ConfirmSelection";
import { Button } from "@material-ui/core";
import styles from "./steps.module.css";
import WithModal from "../Modal";
import { stepData } from "./data";
import { showModal, hideModal } from "../../redux/modal/modalActions";
import { Capitalize } from "../../utils/helpers";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { setLoading } from "../../redux/loaders/loaderActions";
function RegistrationSteps({ detailsToUpdate, updateUserInfo }) {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.data.courses);
  let [currentData, setCurrentData] = useState({});
  let [filled, setFilled] = useState(false);
  let [state, setCurrentState] = useState(0);
  let [confirm, setConfirm] = useState(false);
  const { data: session } = useSession();
  // const user=session.user?session.user:null
  function handleCourseSelecton(course) {
    dispatch(selectCourse(course));
    // setCurrentState(state=>state+1)
  }
  useEffect(() => {
    dispatch(showModal());
    return () => hideModal();
  }, [dispatch]);

  function handleFinish() {
    setConfirm(true);
    dispatch(setLoading(true));
    dispatch(hideModal());
    updateUserInfo();
  }
  function handleClickNext() {
    if (state == detailsToUpdate.length - 1) setConfirm(true);
    setCurrentState((state) => state + 1);
    // setCurrentState(state=>state+1)
    setConfirm(true);
  }
  useEffect(() => {
    const currentStep = stepData.filter((item) => item.id === state);
    setCurrentData(currentStep[0]);
  }, [state]);

  return (
    <WithModal disableClose={true} show={true}>
      <div className={styles.stepsContainer}>
        {confirm && state == detailsToUpdate.length ? (
          <ConfirmSelection />
        ) : (
          <>
            <div className="max-w-sm mx-auto space-y-2 flex-col items-center justify-center sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <Image
                className="block mx-auto rounded-full sm:mx-0 sm:shrink-0"
                src={session.user.image}
                alt=""
                width={70}
                height={70}
              />
            </div>
            <p className="text-center text-slate-700 my-4 text-2xl">
              <span className="text-cyan">
                Welcome to <span className="text-cyan-600">Laibu</span>
              </span>
              , to offer you the most enjoyable experience we need some
              information from you
            </p>
            <Step
              data={currentData}
              setFilled={setFilled}
              source={courses}
              callback={handleCourseSelecton}
              props={(state, setCurrentState)}
            />
          </>
        )}

        {/* i know this is ugly,forgive me for now*/}
        <div
          className={
            (styles.stepButtons,
            state === 0 ? styles.flexCenter : styles.flexBetween)
          }
        >
          {state >= 1 ? (
            <Button
              variant="outlined"
              onClick={() => setCurrentState((state) => state - 1)}
            >
              Back
            </Button>
          ) : null}
          {state <= detailsToUpdate.length - 1 ? (
            <Button
              variant="contained"
              color="primary"
              disabled={!filled ? true : false}
              onClick={handleClickNext}
            >
              Next
            </Button>
          ) : null}
          {confirm && state == detailsToUpdate.length && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleFinish()}
            >
              Confirm
            </Button>
          )}
        </div>
      </div>
    </WithModal>
  );
}

export default RegistrationSteps;
