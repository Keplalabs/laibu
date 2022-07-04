import React, { useEffect } from "react";
import styles from "./Landing.module.css";
import CTA from "./CTA";
import Image from "next/image";
import landingPic from "../../public/images/BoyReading.png";
import Search from "../search/Search";
import { LandingHeader } from "../styledComponents/Header";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/data/dataActions";
import { UNITS } from "../../utils/constants";
import { setLoading } from "../../redux/loaders/loaderActions";

const Landing = () => {
  const dispatch = useDispatch();
  const units = useSelector((state) => state.data.units);
  useEffect(() => {
    if (units.length == 0) {
      dispatch(getData(UNITS));
      dispatch(setLoading(false))
    }
    return ()=>{
      dispatch(setLoading(false))
    }
  }, [dispatch, units]);
  return (
    <div className='px-24 py-16'>
        <div className="flex items-center justify-center flex-col gap-4 w-1/2">
            <h1 className='text-xl text-accent font-bold '>Laibu</h1>
          <p className="text-6xl  font-sans font-bold text-slate-700">
Never have to worry about notes again
          </p>
          <CTA/>
          {/* <Search source={units} placeholder="Search Unit code or Name" /> */}
        </div>
    </div>
  );
};

export default Landing;
