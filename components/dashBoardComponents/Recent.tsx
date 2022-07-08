import React, { useEffect } from "react";
import { getObjLength, isEmpty } from "../.././utils/helpers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSelectedUnit } from "../../redux/search/SearchActions";

function Recent() {
  // we filter recent items to show only units that is not the current one
  const dispatch = useAppDispatch();
  const recentUnits = useAppSelector((state) => state.data.recentUnits);
  useEffect(() => {
    console.log(isEmpty(recentUnits));
  }, [recentUnits]);

  const unit = useAppSelector((state) => state.search.selectedUnitCode);

  return (
    <>
    { !isEmpty(recentUnits)&&getObjLength(recentUnits)>1?(<ul className="border-4 border-white/50 flex rounded-lg flex-col p-4 bg-slate-100/30 backdrop-blur-lg bg-opacity-10 group focus:outline-none focus:ring max-h-[300px]  items-center">
        <span className="text-xl text-accent">Recent Units</span>
        {!isEmpty(recentUnits) && recentUnits
          ? Object.keys(recentUnits)
              .filter((item) => item !== unit)
              .map((code, i) => {
                //hides the current unit from recent items list in unit page
                return (
                  <li className="my-2 w-full capitalize font-mono rounded-2xl text-white " key={i}>
    
                    <button onClick={()=>dispatch(setSelectedUnit(recentUnits[code]))} className="flex flex-col items-left w-full hover:text-accent justify-between px-3 py-2 transition-colors bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent group focus:outline-none focus:ring">
                      <span className="text-xl mb-1">
                        {recentUnits[code].name!.toLowerCase()}
                      </span>
                      <span className="text-lg text-slate-300">{code}</span>
                    </button>
                  </li>
                );
              })
          : null
          }
      </ul>):null}
    </>
  );
}

export default Recent;
