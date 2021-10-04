import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useSession, } from 'next-auth/client'


export default function Home() {
  const {data:session,status}=useSession()
  return (
    <div className={styles.container}>
      <Head>
        <title>Laibu</title>
        <meta name="description" content="Personal campus library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <span className={styles.laibuHeader}>Laibu</span>
        </h1>

       */}

      </main>

      <footer className={styles.footer}>
    footer
      </footer>
    </div>
  )
}
