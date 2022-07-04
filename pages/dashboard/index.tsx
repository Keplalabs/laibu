import React from "react";
import { getSession } from "next-auth/react";
// import { showModal, hideModal } from "../../redux/modal/modalActions";

import Main from "../../components/dashBoardComponents/Main";
function Dashboard() {

  return (
    <div>
      <Main />
    </div>
  );
}

export default Dashboard;

export const getServerSideProps = async (ctx) => {
  const { req } = ctx;
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }

  return {
    props: {
      session: session,
    },
  };
};

// export const getServerSideProps = withPageAuthRequired();
