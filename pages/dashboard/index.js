import React,{useEffect} from 'react'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUserDetails } from '../../redux/user/userActions';
import { fetchCourseInfo } from '../../redux/reducers/units/unitActions';
function Dashboard() {
    const { user, } = useUser();
    const userInfo = useSelector(state => state.userInfo)
    const dispatch = useDispatch()
    const { loading, shouldUpdateCourse, shouldUpdateSemester, shouldUpdateYear, role, course, year, semester } = userInfo
    useEffect(() => {
        if(user){
            dispatch(fetchUserDetails(user))
    dispatch(fetchCourseInfo(user))
        }

    }, [dispatch,user])
    return (<div>
        {
            !loading ? (<div>
                <h1>Welcome to your personal Dashboard {user && user.nickname}</h1>
            </div>) : <h1>Loading...</h1>
        }
    </div>
    )
}

export default Dashboard
export const getServerSideProps = withPageAuthRequired();
