import React, { useEffect } from "react";
// import { getSession } from "next-auth/react";
// import { showModal, hideModal } from "../../redux/modal/modalActions";
import Main from "../../components/dashBoardComponents/Main";
import { User } from "@supabase/supabase-js";
import { supabase } from "../../services/supabase";
import { UserTypes } from "../../redux/user/userReducer";
type propTypes = {
  data: UserTypes;
  user: User;
};

function Dashboard(props: propTypes) {
  // useEffect(() => {
  //   console.log(props.data);
  // }, [props.data]);

  return (
    <div>
      <Main
        userData={props.data}
        currentUser={{ email: props.user!.email, uid: props.user!.id }}
      />
    </div>
  );
}

export default Dashboard;

export const getServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  // const session = await getSession({req})

  if (user) {
    const { data } = await supabase
      .from("User")
      .select("*")
      .eq("uid", user.id)
      .single();

    return {
      props: { user,data },
    };
  }
  return {
    redirect: {
      destination: "/auth/login",
    },
  };
};
