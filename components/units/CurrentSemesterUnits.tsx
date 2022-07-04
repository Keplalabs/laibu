import { current } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Unit } from "../../redux/data/dataTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLoading } from "../../redux/loaders/loaderActions";
import { hideModal } from "../../redux/modal/modalActions";
import { setSelectedUnit } from "../../redux/search/SearchActions";
import CurrentSemSkeleton from "../Skeletons/CurrentSemSkeleton";
type Props={
  showIcon:boolean
}
function CurrentSemesterUnits(props:Props) {
  const dispatch = useAppDispatch();
  const currentSemesterUnits = useAppSelector(
    (state) => state.data.currentSemesterUnits
  );
  function handleClick(unit: Unit) {
    dispatch(setSelectedUnit(unit));
    dispatch(hideModal());
  }
 
  return (
    <>
      {currentSemesterUnits.length > 0 ?
        currentSemesterUnits.map((unit: Unit, i: number) => (
          <div className="my-2" key={i}>
            <button
              onClick={() => handleClick(unit)}
              className="flex text-slate-900 items-center w-auto justify-between px-5 py-3 transition-colors bg-slate-200/70 border border-white/70 rounded-lg hover:bg-transparent group focus:outline-none focus:ring"
            >
              <p className="font-medium flex flex-col  transition-colors group-active:text-indigo-500 group-hover:text-indigo-600">
                <span>{unit.name}</span>
                <span className="text-slate-600 mt-1">{unit.code}</span>
              </p>

             {props.showIcon&& <span className="flex-shrink-0 p-2 ml-4 text-indigo-600 bg-white border border-current rounded-full group-active:text-indigo-500">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>}
            </button>
          </div>
        )):<CurrentSemSkeleton/>
      }
    </>
  );
}

export default CurrentSemesterUnits;
