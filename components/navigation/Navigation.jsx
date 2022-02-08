
import Link from 'next/link'
// import { useUser } from '@auth0/nextjs-auth0';
import { useSession } from 'next-auth/react';
import DashNavbar from './DashNavbar';
import DefaultNavigation from './defaultNavigation';
const Navigation = () => {
    const { data:session,status} = useSession();
    return (
        <>
        {session && session.user?<DashNavbar user={session.user}/>:<DefaultNavigation />}
        </>
    
    )

    }
       
export default Navigation