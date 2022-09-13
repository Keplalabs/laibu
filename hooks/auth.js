import { supabase } from "../services/supabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export const useAuth = () => {
  const router = useRouter();
  const [signedIn, setSignedIn] = useState(false);
  const checkUser = async () => {
    const user = await supabase.auth.user();
    if (user) {
      setSignedIn(true);
      //   router.push("/dashboard");
    }
  };
  const handleAuthChange = async (event, session) => {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  };
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event == "SIGNED_IN") {
          // dispatch()
          setSignedIn(true);
          router.push("/dashboard");
        }
        if ((event = "SIGNED_OUT")) {
          router.push("/");
          setSignedIn(false);
        }
      }
    );
    checkUser();
    return () => listener.unsubscribe();
  }, [router]);

  return { signedIn };
};
