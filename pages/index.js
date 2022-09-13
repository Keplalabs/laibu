import Head from "next/head";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import Landing from "../components/landingPage/Landing";
// import { getSession, useSession} from 'next-auth/react'
import { supabase } from "../services/supabase";

export default function Home() {
  // const { user, error, isLoading } = useUser()

  return (
    <div>
      <Head>
        <title>Laibu</title>
        <meta
          name="description"
          content="get access to university of nairobi notes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Landing />
      </main>

      <footer className="text-slate-800 text-center">
        {/* <a href='https://www.freepik.com/vectors/polygon-shape'>Polygon shape vector created by freepik - www.freepik.com</a>   */}
      </footer>
    </div>
  );
}
export const getServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  // const session = await getSession({req})
  if (user) {
    return {
      redirect: {
        destination: "/dashboard",
      },
      props: { user },
    };
  }
  return {
    props: {},
  };
};
