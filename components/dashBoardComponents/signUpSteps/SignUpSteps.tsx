import React from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { Unit } from "../../../redux/data/dataTypes";
import { StudentInfo } from "../../../redux/user/userActions";
import { useSession } from "next-auth/react";
import { saveUserData } from "../../../redux/user/userActions";
import { setLoading } from "../../../redux/loaders/loaderActions";
import { Status } from "../../../utils/constants";
import FacultyRegistrationSteps from "../../Steps/FacultyRegistrationSteps";
import RegistrationSteps from "../../Steps";
import SelectUnit from "../../Steps/SelectUnit";
import { isEmpty } from "../../../utils/helpers";

function SignUpSteps() {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const selectedYear = useAppSelector((state) => state.selected.selectedYear);
  const userInfo = useAppSelector((state) => state.userInfo);
  const selectedUnit: Unit = useAppSelector(
    (state) => state.search.selectedUnit
  );
  const selectedSemester = useAppSelector(
    (state) => state.selected.selectedSemester
  );
  const selectedCourse = useAppSelector(
    (state) => state.selected.selectedCourse
  );
  const {
    loading,
    detailsToUpdate,
    status: userStatus,
    course,
    year,
    semester,
  } = userInfo;
  const updateUserInfo = () => {
    const payload: StudentInfo = {
      email: session.user.email,
      status: userStatus,
      year: selectedYear,
      semester: selectedSemester,
      course: selectedCourse.code,
    };
    // dispatch(saveUserData(payload));
    dispatch(saveUserData(payload));
    dispatch(setLoading(false));
  };
  return (
    <>
      {/* registrationsteps visiblity is controlled by the modal state,no need to conditionally render it,it will be visible if required  */}
      {userStatus == Status.FACULTY && <FacultyRegistrationSteps />}
      {userStatus == Status.STUDENT && detailsToUpdate.length > 0 && (
        <RegistrationSteps
          detailsToUpdate={detailsToUpdate}
          updateUserInfo={updateUserInfo}
        />
      )}
      {isEmpty(selectedUnit) && detailsToUpdate.length == 0 && <SelectUnit />}
    </>
  );
}

export default SignUpSteps;
