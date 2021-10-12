import React,{useEffect} from 'react'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUserDetails } from '../../redux/user/userActions';
import { showModal,hideModal } from '../../redux/modal/modalActions';
import { fetchCourseInfo } from '../../redux/reducers/units/unitActions';
import RegistrationSteps from '../../components/Steps'
import { Capitalize } from '../../utils/helpers';
function Dashboard() {
    const { user, } = useUser();
    const userInfo = useSelector(state => state.userInfo)
    const dispatch = useDispatch()
    useEffect(() => {
        if(!userInfo.course ){
            console.log('course info')
            dispatch(showModal())
        }
        return () => {
hideModal()
        }
    }, [userInfo])
    const { loading, shouldUpdateCourse, shouldUpdateSemester, shouldUpdateYear, role, course, year, semester } = userInfo
    useEffect(() => {
        if(user){
            dispatch(fetchUserDetails(user))
    dispatch(fetchCourseInfo(user))
        }

    }, [dispatch,user])
    return (<div >
        {
            !loading ? (<div>

                <RegistrationSteps/>
            </div>) : <h1>Loading...</h1>
        }
    </div>
    )
}

export default Dashboard
export const getServerSideProps = withPageAuthRequired();
