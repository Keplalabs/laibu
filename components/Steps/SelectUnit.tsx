import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { DisappearedLoading } from "react-loadingg";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { showModal, hideModal } from "../../redux/modal/modalActions";
import WithModal from "../Modal";
import CurrentSemesterUnits from "../units/CurrentSemesterUnits";

type Props = {};

function SelectUnit({}: Props) {
  const dispatch = useAppDispatch();
  let { loading } = useAppSelector((state) => state.loader);
  let { units } = useAppSelector((state) => state.data);
  let { year } = useAppSelector((state) => state.userInfo);
  useEffect(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <WithModal disableClose={true}>
      <div className="mx-auto w-full bg-white/90 shadow3-md md:w-2/3 lg:w-1/2 backdrop-blur-sm p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl text-accent font-semibold font-mono mb-8 sm:text-3xl">
            Select a unit to get started
          </h2>

          {units.length > 0 && year ? (
            <div >
              <div>
    
                <div className="">
                <CurrentSemesterUnits showIcon={true} />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <DisappearedLoading
                size={100}
                color="skyblue"
                loading={loading}
              />
            </div>
          )}
        </div>
      </div>
    </WithModal>
  );
}

export default SelectUnit;
