import { signIn, useSession } from "next-auth/react";
import { useState, useRef } from "react";
import { setLoading } from "../../redux/loaders/loaderActions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgImg from "../../public/images/bg/abstract.png";
import { setBackground } from "../../redux/background";
import { bgTypes } from "../../utils/constants";
import { DisappearedLoading	 } from "react-loadingg";
import { useAppSelector } from "../../redux/hooks";

const Login = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const { data: session, status } = useSession();
  const bgUrl:string=useAppSelector(state=>state.background.imageUrl)
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const loginBg = {
      bgType: bgTypes.image,
      imageUrl: bgImg.src,
      blurred: true,
      textTheme:'light'
    };


    dispatch(setLoading(false));
    if(bgUrl!=bgImg.src){
      dispatch(setBackground(loginBg));
    }
    return () => {
      setShowSpinner(false)
      // dispatch(
      //   setBackground({
      //     bgType: bgTypes.color,
      //     blurred: false,
      //     imageUrl: "",
      //   })
      //   );
      };
    }, [bgUrl, dispatch]);
    
    if (status === "authenticated") {
    setShowSpinner(false)
    router.push("/");
  }

  return (
    <>
      {/* <Background bgType={bgTypes.color} bgImgUrl={loginBg.src} bgColor={""} /> */}
      {status === "unauthenticated" && (
        <div className=" px-8 pt-16 md:pt-24 xl:pt-48 pb-8 backdrop-blur-md xl:backdrop-blur-xl flex flex-col gap-8 text-white justify-center items-center">
          <p className="text-3xl font-sans md:w-1/2  text-center font-bold">
            Sign in with your{" "}
            <span className="text-accent">student email</span> to gain access
            to personalized content
          </p>
            <button
              className="bg-accent flex justify-center items-center relative w-64 h-12 p-4 text-lg rounded-md "
              onClick={() => {
                setShowSpinner(true);
                signIn("google", { callbackUrl: "/dashboard" });
              }}
            >
              { !showSpinner ?(<span>Sign in with Google</span>): 
            <DisappearedLoading	color='#ffffff' />
    }
            </button>
        </div>
      )}
    </>
  );
};

export default Login;
