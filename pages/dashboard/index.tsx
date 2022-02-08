import React, { useEffect, useState } from "react";
import { useSession, getSession } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails, saveUserData } from "../../redux/user/userActions";
import { fetchCourseInfo } from "../../redux/reducers/units/unitActions";
// import { showModal, hideModal } from "../../redux/modal/modalActions";
import Skeleton from "react-loading-skeleton";
import RegistrationSteps from "../../components/Steps";
import { getData } from "../../redux/data/dataActions";
import {StudentInfo} from "../../redux/user/userActions"
import { bgTypes, COURSES, Status, UNITS } from "../../utils/constants";
import { setLoading } from "../../redux/loaders/loaderActions";
import { setBackground } from "../../redux/background";
import blurredBgImage from "../../public/images/bg/bgblurred.png";
import dashboardBgImage from "../../public/images/bg/dashboardbg.png";
import FacultyRegistrationSteps from "../../components/Steps/FacultyRegistrationSteps";
function Dashboard() {
  let [bgType, setBgType] = useState(bgTypes.image);
  let [bgImageUrl, setBgImageUrl] = useState(blurredBgImage);
  const { data: session } = useSession();
  const userInfo = useSelector((state) => state.userInfo);
  const modalIsVisible = useSelector((state) => state.modal.isVisible);
  const dispatch = useDispatch();
  const {
    loading,
    detailsToUpdate,
    status: userStatus,
    course,
    year,
    semester,
  } = userInfo;
  const courses = useSelector((state) => state.data.courses);
  const units = useSelector((state) => state.data.units);
  const selectedCourse=useSelector(state=>state.selected.selectedCourse)
  const selectedYear=useSelector(state=>state.selected.selectedYear)
  const selectedSemester=useSelector(state=>state.selected.selectedSemester)


  // useEffect(() => {
  // }, [dispatch, user]);
  //fetch and populate data
  const updateUserInfo = () => {
    const payload:StudentInfo={
      email:session.user.email,
      status:userStatus,
      year:selectedYear,
      semester:selectedSemester,
      course:selectedCourse.code
    }
    dispatch(saveUserData(payload));
    dispatch(setLoading(false));
  };
  useEffect(() => {
   if (session.user) {
      dispatch(fetchUserDetails(session.user));
    } 
  }, [dispatch,session]);
  useEffect(() => {
    const bgStyle = {
      bgType,
      imageUrl: modalIsVisible ? blurredBgImage.src : dashboardBgImage.src,
    };
    dispatch(setBackground(bgStyle));
    
    if (courses.length === 0) {
      dispatch(getData(COURSES));
    }

    if (units.length === 0) {
      dispatch(getData(UNITS));
    }
    dispatch(setLoading(false));
    return () => dispatch(setBackground);
  }, [courses, session, units, dispatch, bgType, modalIsVisible]);

  return (
    <div>
      {!loading ? (
        <div>
          {/* registrationsteps visiblity is controlled by the modal state,no need to conditionally render it,it will be visible if required  */}
          {userStatus == Status.FACULTY && <FacultyRegistrationSteps />}
          {userStatus == Status.STUDENT && (detailsToUpdate.length > 0) && (
            <RegistrationSteps
              detailsToUpdate={detailsToUpdate}
              updateUserInfo={updateUserInfo}
            />
          )}
        </div>
      ) : (
        <Skeleton count={3} />
      )}
    </div>
  );
}

export default Dashboard;

export const getServerSideProps = async (ctx) => {
  const { req } = ctx;
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }

  return {
    props: {
      session: session,
    },
  };
};

// export const getServerSideProps = withPageAuthRequired();
