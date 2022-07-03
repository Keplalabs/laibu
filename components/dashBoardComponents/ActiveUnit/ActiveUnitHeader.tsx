import React from "react";
import { Unit } from "../../../redux/data/dataTypes";
import { useAppSelector } from "../../../redux/hooks";
import { ActiveUnitContent } from "./ActiveUnit";

type Props = {
  activeUnitContent: ActiveUnitContent;
};

function ActiveUnitHeader(props: Props) {
  const unit:Unit=useAppSelector(state=>state.search.selectedUnit)
  return (
    <div className="flex py-2 px-12  rounded-md text-white bg-gradient-to-r from-blue-600/50 to-pink-600/50 justify-between items-center">
      <div className="flex md:p-4 p-2 flex-col justify-start">
        <h1 className="md:text-2xl  text-xl my-2">{props.activeUnitContent.unit}</h1>
        <p className="md:text-xl text-lg text-slate-200">{props.activeUnitContent.code}</p>
      </div>
      <div>
        <p>Semester {unit.semester}</p>
      </div>
    </div>
  );
}

export default ActiveUnitHeader;
