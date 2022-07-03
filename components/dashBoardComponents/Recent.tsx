import React, { useEffect } from "react";
import { getObjLength, isEmpty } from "../.././utils/helpers";
import { useAppSelector } from "../../redux/hooks";

function Recent() {
  // we filter recent items to show only units that is not the current one
  const recentunits = useAppSelector((state) => state.data.recentUnits);
  useEffect(() => {
    console.log(recentunits);

    return () => {};
  }, [recentunits]);

  const unit = useAppSelector((state) => state.search.selectedUnitCode);

  return (
    <>
    { !isEmpty(recentunits)&&getObjLength(recentunits)>1?(<ul className="flex flex-col  max-h-56 overflow-auto items-center">
        <h2 className="text-xl">Recent Units</h2>
        {!isEmpty(recentunits) && recentunits
          ? Object.keys(recentunits)
              .filter((item) => item !== unit)
              .map((code, i) => {
                //hides the current unit from recent items list in unit page
                return (
                  <li className="my-2 rounded-2xl text-white " key={i}>
                    <a className="flex flex-col items-center w-auto hover:text-blue-600 justify-between px-3 py-2 transition-colors bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent group focus:outline-none focus:ring">
                      <span className="text-xl mb-1">
                        {recentunits[code].name.toLowerCase()}
                      </span>
                      <span className="text-lg text-slate-300">{code}</span>
                    </a>
                  </li>
                );
              })
          : null}
      </ul>):null}
    </>
  );
}

export default Recent;
