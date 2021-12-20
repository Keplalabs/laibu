import React, { useEffect } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetails } from "../../redux/user/userActions";
import { fetchCourseInfo } from "../../redux/reducers/units/unitActions";
import DashNavbar from "../../components/navigation/DashNavbar";
import { Skeleton } from "react-loading-skeleton";
import Main from "../../components/dashboard/Main";
function Dashboard() {
  const { user } = useUser();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const {
    loading,
    shouldUpdateCourse,
    shouldUpdateSemester,
    shouldUpdateYear,
    role,
    course,
    year,
    semester,
  } = userInfo;
  useEffect(() => {
    if (user) {
      dispatch(fetchUserDetails(user));
      dispatch(fetchCourseInfo(user));
    }
  }, [dispatch, user]);
  return (
    <div>
      {!loading ? <div>
      <Main/>
      </div> : <Skeleton />}
    </div>
  );
}

export default Dashboard;
// export const getServerSideProps = withPageAuthRequired();
