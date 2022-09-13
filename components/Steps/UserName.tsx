import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setUserName } from "../../redux/selected/selectedActions";

type Props = {
  data: {
    inputPlaceholder: string;
    inputType: string;
    id: number;
    dataType: string;
    defaultValue: string;
  },
  setFilled: React.Dispatch<React.SetStateAction<boolean>>
};

const UserName = (props: Props) => {
  let username = useAppSelector((state) => state.selected.selectedUserName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (username.length >= 4) {
      props.setFilled(true);
    }
    else{
        props.setFilled(false);
    }
    return ()=>props.setFilled(false)
  }, [username, props]);

  return (
    <>
      <h4 className="text-slate-300 text-center m-4 text-xl">
        {props.data.inputPlaceholder}
      </h4>
      <input
        type="text"
        placeholder="username"
        className="p-3 rounded-lg"
        onChange={(e) => dispatch(setUserName(e.target.value))}
        value={username}
      />
    </>
  );
};

export default UserName;
