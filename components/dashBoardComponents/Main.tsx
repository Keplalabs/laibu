import React,{useState,useEffect} from "react";
import SignUpSteps from "./signUpSteps/SignUpSteps";
import ActiveUnit from "./ActiveUnit/ActiveUnit";
import CurrentSemesterUnits from '../units/CurrentSemesterUnits';
import Recent from "./Recent";
import { useSession } from "next-auth/react";
import Skeleton from "react-loading-skeleton";
import { filterCurrentSemesterUnits, getData, storeActiveUnit } from "../../redux/data/dataActions";
import { ACTIVE_UNIT, bgTypes, COURSES, RECENT, Status, UNITS } from "../../utils/constants";
import { setLoading } from "../../redux/loaders/loaderActions";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setBackground } from "../../redux/background";
import blurredBgImage from "../../public/images/bg/schoolbg.png";
import dashboardBgImage from "../../public/images/bg/schoolbg.png";
import { fetchUserDetails } from "../../redux/user/userActions";
import { retreiveActiveUnit } from "../../redux/search/SearchActions";
import { isEmpty } from "../../utils/helpers";

function Main() {
    let [bgType, setBgType] = useState(bgTypes.image);
  const { data: session } = useSession();
  const modalIsVisible = useAppSelector((state) => state.modal.isVisible);
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.data.courses);
  const units = useAppSelector((state) => state.data.units);
  const { selectedUnit, selectedUnitCode } = useAppSelector(
    (state) => state.search
  );
   useEffect(()=>{
if(units.length>0){
  dispatch(filterCurrentSemesterUnits())
}
  },[units])
useEffect(() => {
    if (session && session.user) {
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
    if(isEmpty(selectedUnit)){
      dispatch(retreiveActiveUnit())
    }
    if (courses.length === 0) {
      dispatch(getData(COURSES));
    }
    
    dispatch(getData(RECENT));

    if (units.length === 0) {
      dispatch(getData(UNITS));
    }
    if(courses.length>0&&units.length>0)dispatch(setLoading(false))
    return()=>{
        localStorage.setItem(ACTIVE_UNIT,JSON.stringify(selectedUnit))
    }
  }, [courses, session, units, dispatch, bgType, modalIsVisible, selectedUnit]);

  return (
    <div className="grid md:w-full w-5/6 mx-auto xl:max-w-screen-2xl sm:grid-cols-1 sm:grid-rows-3 pd-4 md:grid-cols-3 md:grid-rows-3">
      {<SignUpSteps />}
     <div className="md:row-span-3 w-full justify-self-center md:col-span-2 sm:col-auto sm:row-auto rounded-md ">
      <ActiveUnit />
     </div>
     <div className="md:row-start-1 md:row-end-2 md:col-start-3 sm:col-auto">
      <Recent/>
     </div>
      <div className="h-full md:w-5/ sm:w-full overflow-auto justify-self-center sm:row-start-2 sm:col-auto md:row-start-2 md:row-end-4 md:col-start-3">
      <h2 className="text-xl">Current Semester Units</h2>
      <div className="justify-self-center sm:h-3/5 md:max-h-96 overflow-auto p-4 mt-4 flex flex-col items-center  bg-slate-100/30 rounded-md backdrop-blur-sm ">
      <CurrentSemesterUnits showIcon={false}/>
      </div>
      </div>
    </div>
  );
}

export default Main;
