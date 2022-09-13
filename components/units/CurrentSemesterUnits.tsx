import { current } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Unit } from "../../redux/data/dataTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLoading } from "../../redux/loaders/loaderActions";
import { hideModal } from "../../redux/modal/modalActions";
import { setSelectedUnit } from "../../redux/search/SearchActions";
import CurrentSemSkeleton from "../Skeletons/CurrentSemSkeleton";
type Props = {
  showIcon: boolean;
};
function CurrentSemesterUnits(props: Props) {
  const dispatch = useAppDispatch();
  const currentSemesterUnits = useAppSelector(
    (state) => state.data.currentSemesterUnits
  );
  const {isVisible} = useAppSelector(
    (state) => state.modal
  );
  function handleClick(unit: Unit) {
    dispatch(setSelectedUnit(unit));
    isVisible&&dispatch(hideModal());
  }

  return (
    <div className='backdrop-blur-lg rounded-lg p-4'> 
      <h2 className="text-xl  text-slate-800 text-center mb-2 font-sans">
        Current Semester Units
      </h2>
      <div className="overflow-auto flex flex-wrap items-center  rounded-md px-2 max-h-[500px] ">
        {currentSemesterUnits.length > 0 ? (
          currentSemesterUnits.map((unit: Unit, i: number) => (
            <div className="my-2 w-full" key={i}>
              <button
                onClick={() => handleClick(unit)}
                className="flex w-full text-slate-700 items-center justify-between px-5 py-3 transition-colors bg-slate-300/30 border border-white/70 rounded-lg hover:bg-transparent group focus:outline-none focus:ring"
              >
                <p className="font-medium font-mono text-left flex flex-col justify-start items-start transition-colors group-active:text-indigo-500 group-hover:text-indigo-600">
                  <span className="font-semibold">{unit.name}</span>
                  <span className="text-accent mt-1">{unit.code}</span>
                </p>

                {props.showIcon && (
                  <span className="flex-shrink-0 p-2 ml-4 text-indigo-600 bg-white border border-current rounded-full group-active:text-indigo-500">
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
                  </span>
                )}
              </button>
            </div>
          ))
        ) : (
          <CurrentSemSkeleton />
        )}
      </div>
    </div>
  );
}

export default CurrentSemesterUnits;
