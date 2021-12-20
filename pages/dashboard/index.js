import React, { useEffect, useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails } from "../../redux/user/userActions";
import { showModal, hideModal } from "../../redux/modal/modalActions";
import { fetchCourseInfo } from "../../redux/reducers/units/unitActions";
import Skeleton from "react-loading-skeleton";
import RegistrationSteps from "../../components/Steps";
import { getData } from "../../redux/data/dataActions";
import { bgTypes, COURSES, UNITS } from "../../utils/constants";
import { setLoading } from '../../redux/loaders/loaderActions';
import { setBackground } from "../../redux/background";
import blurredBgImage from '../../public/images/bg/bgblurred.png'
import dashboardBgImage from '../../public/images/bg/dashboardbg.png'
function Dashboard() {
  let [bgType,setBgType]=useState(bgTypes.image)
  let [bgImageUrl,setBgImageUrl]=useState(blurredBgImage)
  const { user } = useUser();
  const userInfo = useSelector((state) => state.userInfo);
  const modalIsVisible = useSelector((state) => state.modal.isVisible);
  const dispatch = useDispatch();
  const { loading, detailsToUpdate, role, course, year, semester } = userInfo;
  const courses = useSelector((state) => state.data.courses);
  const units = useSelector((state) => state.data.units);
  

  // useEffect(() => {
    // }, [dispatch, user]);
    //fetch and populate data
  useEffect(() => {
    const bgStyle={
      bgType,
      imageUrl:modalIsVisible?blurredBgImage.src:dashboardBgImage.src,
    }
    dispatch(setBackground(bgStyle))
    if (user) {
      dispatch(fetchUserDetails(user));
    }
    if (courses.length === 0) {
      dispatch(getData(COURSES));
    }
   
    if (units.length === 0) {
      dispatch(getData(UNITS));
    }
    dispatch(setLoading(false))
    return ()=>dispatch(setBackground)

  }, [courses, user, units, dispatch, bgType, modalIsVisible]);
  

  //control registration steps visiblity
  useEffect(() => {
    if (detailsToUpdate.length > 0) {
      dispatch(showModal());
    }
    return () => {
      hideModal();
    };
  }, [dispatch, detailsToUpdate]);

  return (
    <div>
      {!loading ? (
        <div>
        {/* registrationsteps visiblity is controlled by the modal state,no need to conditionally render it,it will be visible if required  */}
          <RegistrationSteps detailsToUpdate={detailsToUpdate}/>
        </div>
      ) : (
        <Skeleton count={3} />
      )
     }
    </div>
  );
}

export default Dashboard;
// export const getServerSideProps = withPageAuthRequired();
