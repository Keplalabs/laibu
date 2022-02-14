import React,{useEffect} from "react";
import Skeleton from "react-loading-skeleton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { showModal,hideModal } from "../../redux/modal/modalActions";
import WithModal from "../Modal";
import CurrentSemesterUnits from '../units/CurrentSemesterUnits';

type Props = {};

function SelectUnit({}: Props) {
  const dispatch=useAppDispatch()
      let {units} = useAppSelector((state) => state.data);
      let {year} = useAppSelector((state) => state.userInfo);
      useEffect(() => {
        dispatch(showModal())
      }, [dispatch])
      

  return (
    <WithModal disableClose={true}>

    <div className="w-full bg-slate-800 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl text-white font-bold mb-8 sm:text-3xl">Select a unit to get started
</h2>

        <h2 className="text-slate-300 text-2xl  ml-4 text-left">This semester units</h2>
      {units.length>0 && year?<div className="grid xl:grid-cols-3 justify-items-center lg:grid-cols-3 md:grid-cols-2 max-h-96 sm:justify-items-center auto-cols-max sm:grid-cols-1 gap-8 p-4 mt-2 overflow-auto">
        <CurrentSemesterUnits/>
        </div>
        :<Loading}
      </div>
    </div>
    </WithModal>
  );
}

export default SelectUnit;
