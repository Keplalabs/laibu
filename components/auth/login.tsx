import { signIn, useSession } from "next-auth/react";
import { useState, useRef } from "react";
import { setLoading } from "../../redux/loaders/loaderActions";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const { data:session, status} = useSession();
    const router = useRouter()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch]);


  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <>
      {status === "unauthenticated" && (
        <>
       <button onClick={()=>signIn('google',{ callbackUrl: '/dashboard' })}>Login with Google</button>
  
        </>
      )}
    </>
  );
};

export default Login;
