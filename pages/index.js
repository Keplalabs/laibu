import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/landingPage/Landing'
import { getSession, useUser, } from '@auth0/nextjs-auth0'


export default function Home() {
  const { user, error, isLoading } = useUser()

  return (
    <div className={styles.container}>
      <Head>
        <title>Laibu</title>
        <meta name="description" content="get access to university of nairobi notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Landing />
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}
export const getServerSideProps = async (context) => {
  const { req, res,props } = context
  const session = await getSession(req, res)
  if (session) {
    return {
      redirect: {
        destination: '/dashboard'
      }
    }
  }
  return {
    props:{
      session
    }
  }

}