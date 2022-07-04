import React, { useState, useEffect, useMemo } from "react";
import SignUpSteps from "./signUpSteps/SignUpSteps";
import ActiveUnit from "./ActiveUnit/ActiveUnit";
import CurrentSemesterUnits from "../units/CurrentSemesterUnits";
import Recent from "./Recent";
import { useSession } from "next-auth/react";
import {
  getData,
} from "../../redux/data/dataActions";
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
import blurredBgImage from "../../public/images/bg/schoolbg.png";
import dashboardBgImage from "../../public/images/bg/3dbg.jpg";
import { fetchUserDetails } from "../../redux/user/userActions";
import { retreiveActiveUnit } from "../../redux/search/SearchActions";
import { isEmpty } from "../../utils/helpers";

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

  useEffect(() => {
    if (session && session.user) {
      console.log(session.user);

      dispatch(fetchUserDetails(session.user));
    }
  }, [dispatch, session]);

  useEffect(() => {
    const bgStyle = {
      bgType,
      imageUrl: modalIsVisible ? blurredBgImage.src : dashboardBgImage.src,
    };
    dispatch(setBackground(bgStyle));
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
    <div className="flex w-full gap-4 px-12">
      {<SignUpSteps />}
      <div className="w-4/5">
        <ActiveUnit />
      </div>
      <div className="flex flex-col w-1/4 gap-8">
        <Recent />
      <div className="h-full md:w-5/ sm:w-full overflow-auto justify-self-center sm:row-start-2 sm:col-auto md:row-start-2 md:row-end-4 md:col-start-3">
        <h2 className="text-xl text-center mb-4 font-bold font-sans">Current Semester Units</h2>
        <div className="overflow-auto p-4 flex flex-col items-center bg-slate-100/30 rounded-md backdrop-blur-lg max-h-[520px] ">
          <CurrentSemesterUnits showIcon={false} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Main;
