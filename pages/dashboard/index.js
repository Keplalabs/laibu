import { getSession, signIn } from 'next-auth/client'
import { useState, } from 'react'
function Dashboard({ session }) {

    return (
        <div>
            <h1>Welcome to your personal Dashboard {session && session.user.name}</h1>

        </div>
    )
}

export default Dashboard

export const getServerSideProps = async (context) => {
    // console.log("context:",context)
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    return {
        props: {
            session,

        }
    }

}
