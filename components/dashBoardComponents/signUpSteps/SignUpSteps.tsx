import React from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { Unit } from "../../../redux/data/dataTypes";
import { useSession } from "next-auth/react";
import { saveUserData } from "../../../redux/user/userActions";
import { setLoading } from "../../../redux/loaders/loaderActions";
import { Status } from "../../../utils/constants";
import FacultyRegistrationSteps from "../../Steps/FacultyRegistrationSteps";
import RegistrationSteps from "../../Steps";
import SelectUnit from "../../Steps/SelectUnit";
import { isEmpty } from "../../../utils/helpers";
import { UserTypes } from "../../../redux/user/userReducer";
import { setSignUp } from "../../../redux/signup";
type propTypes={
  currentUser:{
    email:string,
    uid:string
  }
}
function SignUpSteps(props:propTypes) {

  const dispatch = useAppDispatch();
  let selectedYear = useAppSelector((state) => state.selected.selectedYear);
  let signUp=useAppSelector(state=>state.signup.show)
  const steps=useAppSelector(state=>state.signup.steps)
  let userInfo = useAppSelector((state) => state.userInfo);

  const selectedUnit: Unit = useAppSelector(
    (state) => state.search.selectedUnit
  );
  const selectedSemester = useAppSelector(
    (state) => state.selected.selectedSemester
  );
  const selectedCourse = useAppSelector(
    (state) => state.selected.selectedCourse
  );
  const selectedUserName = useAppSelector(
    (state) => state.selected.selectedUserName
  );

  const updateUserInfo = () => {
    const payload:UserTypes  = {
      email: props.currentUser.email!,
      uid: props.currentUser.uid!,
      username: selectedUserName!,
      year: selectedYear!,
      semester: selectedSemester!,
      course: selectedCourse.code!,
      role: Status.STUDENT,
      registeredUnits: [],
      moderatingUnits: []
    };
    // dispatch(saveUserData(payload));
    dispatch(saveUserData(payload));
    dispatch(setSignUp(false))
    dispatch(setLoading(false));
  };
  return (
    <>
      {/* registrationsteps visiblity is controlled by the modal state,no need to conditionally render it,it will be visible if required  */}
    {signUp && (
        <RegistrationSteps
          detailsToUpdate={Object.keys(steps)}
          updateUserInfo={updateUserInfo}
        />
      )}
      {isEmpty(selectedUnit) && !signUp && <SelectUnit />}
    </>
  );
}

export default SignUpSteps;
