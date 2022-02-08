import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModal, hideModal } from "../../redux/modal/modalActions";
import WithModal from "../Modal";
import Search from '../search/Search';
function FacultyRegistrationSteps() {
  const dispatch = useDispatch();
    const units = useSelector((state) => state.data.units);

  useEffect(() => {
    dispatch(showModal());
    return () => {
      hideModal();
    };
  }, [dispatch]);
  return (
    <WithModal disableClose={true}>
      <h1 className="text-3xl text-center w-1/2">
        Welcome to laibu distinguished faculty member,choose the units you would
        like to moderate
      </h1>
      <Search source={units} focus={true} placeholder={"Search and select a unit"}/>
    </WithModal>
  );
}

export default FacultyRegistrationSteps;
