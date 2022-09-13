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
import Image from "next/image";
import { setLoading } from "../../redux/loaders/loaderActions";
function RegistrationSteps({ detailsToUpdate, updateUserInfo }) {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.data.courses);
  let [currentData, setCurrentData] = useState({});
  let [filled, setFilled] = useState(false);//used to disable or enable next step button
  let [state, setCurrentState] = useState(0);
  let [confirm, setConfirm] = useState(false);
  function handleCourseSelecton(course) {
    dispatch(selectCourse(course));
  }
  useEffect(() => {
    dispatch(showModal());
    return () => {
      dispatch(hideModal())};
  }, [dispatch]);

  function handleFinish() {
    setConfirm(true);
    dispatch(setLoading(true));
    // dispatch(hideModal());
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
    <WithModal disableClose={true}>
      <div className="border-0 rounded-lg shadow-lg bg-accent relative p-12 flex flex-col w-full mx-auto sm:w-2/3 md:w-1/2 lg:w-1/3 2xl:w-1/4 outline-none focus:outline-none">
        {confirm && state == detailsToUpdate.length ? (
          <ConfirmSelection />
        ) : (
          <>
            {/* <div className="max-w-sm mx-auto space-y-2 flex-col items-center justify-center sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <Imagep-aut
                className="block mx-auto rounded-full sm:mx-0 sm:shrink-0"
                src={session.user.image}
                alt=""
                width={70}
                height={70}
              />
            </div> */}
            <p className="text-center mb-4  text-slate-100 text-xl flex flex-col gap-y-2">
              <span className="mb-6 text-3xl">
                Welcome to <span className="text-cyan-400">Laibu</span>
              </span>
              <span>
            to offer you the most enjoyable experience we need some
              information from you
              </span>
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
