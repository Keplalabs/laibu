import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Skeleton from "react-loading-skeleton";
import { Unit } from "../../../redux/data/dataTypes";
import axios from "axios";
import { api } from "../../../utils/urls";
import { useState } from "react";
import { showAlert } from "../../../redux/alert/index";
import { isEmpty } from "../../../utils/helpers";
import ActiveUnitHeader from "./ActiveUnitHeader";
import Tabs from "../Tabs";
import { updateRecentUnits } from '../../../redux/data/dataActions';
import TabSkeleton from '../../Skeletons/TabSkeleton';

export type ActiveUnitContent = {
  unit: string;
  code: string;
  notes: {
    document: object[];
    assignment: object[];
    video: object[];
  };
};
type Props = {};

function ActiveUnit({}: Props) {
  const [activeUnitContent, setActiveUnitContent] =
    useState<ActiveUnitContent>();
  const dispatch = useAppDispatch();
  let { selectedUnit: activeUnit, selectedUnitCode } = useAppSelector(
    (state) => state.search
  );
  // const selectedUnitCode=useAppSelector(state=>state.search)
  useEffect(() => {
    if (selectedUnitCode) {
      const payload = { unit_code: selectedUnitCode };
      axios
        .post<any>(api.routes.unitNotesUrl, payload)
        .then((res) => setActiveUnitContent(res.data.message))
        .catch((err) => {
          dispatch(showAlert({ type: "error", message: err.message }));
        });
        dispatch(updateRecentUnits(activeUnit))
    }
  }, [dispatch, selectedUnitCode,activeUnit]);
 
  return selectedUnitCode ? (
    <div className="grid-flow-col border h-full w-full bg-slate-100/30 bg-clip-padding rounded-lg backdrop-blur-lg bg-opacity-10 border-white/50">
      {!isEmpty(activeUnitContent)?<ActiveUnitHeader activeUnitContent={activeUnitContent} />:null}
      {!isEmpty(activeUnitContent)?<Tabs activeUnitContent={activeUnitContent}/>:<TabSkeleton/>}
    </div>
  ) : (
    <TabSkeleton/>
  );
}

export default ActiveUnit;
