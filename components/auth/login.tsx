import { signIn, useSession } from "next-auth/react";
import { useState, useRef } from "react";
import { setLoading } from "../../redux/loaders/loaderActions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgImg from "../../public/images/bg/abstract.png";
import { setBackground } from "../../redux/background";
import { showAlert } from "../../redux/alert";
import { bgTypes } from "../../utils/constants";
import { DisappearedLoading } from "react-loadingg";
import { useAppSelector } from "../../redux/hooks";
import { supabase } from "../../services/supabase";
import { ERROR } from "../../utils/constants";
import GoogleLoginButton from "../styledComponents/SocialIcons/GoogleButton";
const Login = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [email, setEmail] = useState("");
  // const { data: session, status } = useSession();

  const bgUrl: string = useAppSelector((state) => state.background.imageUrl);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async () => {
  
    console.log('login')
    try {
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      dispatch(showAlert({message:"Check your email for the login link!"}));
    } catch (error) {
      dispatch(showAlert({
        message: error.error_description || error.message,
        type: ERROR,
      }));
    } finally {
      setShowSpinner(false);
    }
  };
  const signInWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      // provider can be 'github', 'google', 'gitlab', and more
      provider: "google",
    });
  };
  useEffect(() => {
    dispatch(setLoading(false));
    return () => {
      setShowSpinner(false);
    };
  }, [dispatch]);

  return (
    <div className="w-full p-8 md:px-6 rounded-md md:pt-8 lg:pt-12">
      <div className="mx-auto flex md:w-1/2 lg:w-1/3 xl:w-1/4 bg-primarybg flex-col items-center  py-12 px-4 lg:px-8 justify-center gap-y-4">
        <p className="text-3xl font-sans text-center font-bold">
          Sign in with your <span className="text-accent ">Student email</span>
        </p>
        <form onSubmit={(e)=>{
          e.preventDefault()
          setShowSpinner(true);
          handleLogin()
        }} className="w-full flex flex-col gap-y-4 justify-center items-center">
          <input
            className="p-3 w-full rounded-md"
            type="email"
            placeholder="Student Email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="w-full">
            <button
              type="submit"
              className="bg-accent w-full text-white flex justify-center items-center relative  p-3 text-lg rounded-md "     
              disabled={showSpinner}
            >
              {!showSpinner ? (
                <span>Send magic link</span>
              ) : (
                <span className="w-full p-3">
                  <DisappearedLoading color="#ffffff" />
                  </span>
              )}
            </button>
          </div>
        </form>
        <GoogleLoginButton handleClick={signInWithGoogle} />
      </div>
    </div>
  );
};

export default Login;
