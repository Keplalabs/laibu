import React, { useEffect } from "react";
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
  const { user } = useUser();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const { loading, detailsToUpdate, role, course, year, semester } = userInfo;
  const courses = useSelector((state) => state.data.courses);
  const units = useSelector((state) => state.data.units);
  

  // useEffect(() => {
    // }, [dispatch, user]);
  useEffect(() => {
    const bgStyle={
      bgType:bgTypes.image,
      imageUrl:showModal?blurredBgImage.src:dashboardBgImage.src,
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

  }, [courses, user, units, dispatch,]);
  

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
          <RegistrationSteps
            detailsToUpdate={detailsToUpdate}
          />
        </div>
      ) : (
        <Skeleton count={3} />
      )}
    </div>
  );
}

export default Dashboard;
export const getServerSideProps = withPageAuthRequired();
