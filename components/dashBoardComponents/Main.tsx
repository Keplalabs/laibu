import React, { useState, useEffect, useMemo } from "react";
import SignUpSteps from "./signUpSteps/SignUpSteps";
import ActiveUnit from "./ActiveUnit/ActiveUnit";
import CurrentSemesterUnits from "../units/CurrentSemesterUnits";
import Recent from "./Recent";
import { useSession } from "next-auth/react";
import { getData } from "../../redux/data/dataActions";
import {
  ACTIVE_UNIT,
  bgTypes,
  COURSES,
  RECENT,
  Status,
  UNITS,
} from "../../utils/constants";
import { setLoading } from "../../redux/loaders/loaderActions";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setBackground } from "../../redux/background";
// import dashboardBgImage from "../../public/images/bg/3dgeometry.jpg";
import { fetchUserDetails } from "../../redux/user/userActions";
import { retreiveActiveUnit } from "../../redux/search/SearchActions";
import { isEmpty } from "../../utils/helpers";
import { useBeforeunload } from "react-beforeunload";

function Main() {
  let [bgType, setBgType] = useState(bgTypes.image);
  const { data: session } = useSession();
  const modalIsVisible = useAppSelector((state) => state.modal.isVisible);
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.data.courses);
  const { course, semester, year } = useAppSelector((state) => state.userInfo);
  const units = useAppSelector((state) => state.data.units);
  const { selectedUnit, selectedUnitCode } = useAppSelector(
    (state) => state.search
  );
  useBeforeunload((event) => {
    localStorage.setItem(ACTIVE_UNIT, JSON.stringify(selectedUnit));
  });

  useEffect(() => {
    if (session && session.user) {
      console.log(session.user);

      dispatch(fetchUserDetails(session.user));
    }
  }, [dispatch, session]);
  useEffect(() => {
    const bgStyle2 = {
      bgType: bgTypes.color,
    };

    dispatch(setBackground(bgStyle2));
  }, [dispatch]);
  useEffect(() => {
    //set semester units
    if (isEmpty(selectedUnit)) {
      dispatch(retreiveActiveUnit());
    }
    if (courses.length === 0) {
      dispatch(getData(COURSES));
    }

    dispatch(getData(RECENT));

    if (units.length === 0) {
      dispatch(getData(UNITS));
    }
    if (courses.length > 0 && units.length > 0) dispatch(setLoading(false));
    return () => {
      localStorage.setItem(ACTIVE_UNIT, JSON.stringify(selectedUnit));
    };
  }, [courses, session, units, dispatch, bgType, modalIsVisible, selectedUnit]);

  return (
    <div className="flex w-full flex-col md:flex-row gap-4 px-8 md:px-12">
      {<SignUpSteps />}
      <div className="w-full md:w-4/5">
        <ActiveUnit />
      </div>
      <div className="flex flex-col md:w-1/4 gap-8">
        <Recent />
        <CurrentSemesterUnits showIcon={false} />
      </div>
    </div>
  );
}

export default Main;
