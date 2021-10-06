// import { getSession, signIn } from 'next-auth/client'
import { useUser,withPageAuthRequired } from '@auth0/nextjs-auth0';
function Dashboard() {
    const { user, } = useUser();
        return (
        <div>
            <h1>Welcome to your personal Dashboard {user && user.name}</h1>

        </div>
    )
}

export default Dashboard
export const getServerSideProps = withPageAuthRequired();
