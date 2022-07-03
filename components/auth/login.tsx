import { signIn, useSession } from "next-auth/react";
import { useState, useRef } from "react";
import { setLoading } from "../../redux/loaders/loaderActions";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Background from "../background/Background"
import { bgTypes } from "../../utils/constants";
import loginBg from '../../public/images/bg/login_bg.jpg'
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
     <Background bgType={bgTypes.color} bgImgUrl={loginBg.src} bgColor={""} />
      {status === "unauthenticated" && (
        <div className="h-full mt-24 flex flex-col bg-slate-800 text-white justify-center items-center">
       <p className='text-3xl font-sans font-bold'>Sign in to gain access to personalized content that fits your campus experience </p>
       <button  className='bg-blue-700 p-4 rounded-md ' onClick={()=>signIn('google',{ callbackUrl: '/dashboard' })}>Login with Google</button>
  
        </div>
      )}
    </>
  );
};

export default Login;
