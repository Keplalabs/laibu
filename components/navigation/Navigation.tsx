
import Link from 'next/link'
// import { useUser } from '@auth0/nextjs-auth0';
import DashNavbar from './DashNavbar';
import DefaultNavigation from './defaultNavigation';
import { useEffect } from 'react';
type propTypes={
    signedIn:boolean
}
const Navigation = (props:propTypes) => {
    // const { data:session,status} = useSession();
    console.log(props.signedIn)
    return (
        <>
        {props.signedIn?<DashNavbar/>:<DefaultNavigation />}
        </>
    
    )

    }
       
export default Navigation