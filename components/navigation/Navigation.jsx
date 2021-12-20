
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';
import DashNavbar from './DashNavbar';
import DefaultNavigation from './defaultNavigation';
const Navigation = () => {
    const { user, isLoading: loading } = useUser();
    return (
        <>
        {user?<DashNavbar user={user}/>:<DefaultNavigation />}
        </>
    
    )

    }
       
export default Navigation