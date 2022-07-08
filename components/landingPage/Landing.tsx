import React, { useEffect } from "react";
import CTA from "./CTA";
import Features from './Features'
import landingPic from "../../public/images/bg/abstract.png";
import revisionIcon from "../../public/icons/revisionIcon.png";
import notesIcon from "../../public/icons/notesIcon.png";
import targetIcon from "../../public/icons/targetIcon.png";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getData } from "../../redux/data/dataActions";
import { setBackground } from "../../redux/background";
import { UNITS, bgTypes } from "../../utils/constants";
import { setLoading } from "../../redux/loaders/loaderActions";
import { featureProps } from "./propTypes";

const Landing = () => {
  const dispatch = useAppDispatch();
    const bgUrl:string=useAppSelector(state=>state.background.imageUrl)
  const units = useAppSelector((state) => state.data.units);
  const features:featureProps[]=[
    {
iconUrl:revisionIcon.src,
title:'Revision Material',
description:"Gain access to previous assignments and exams for revision"
  },
    {
iconUrl:targetIcon.src,
title:'Personalized Content',
description:"View content relevant to your course"
  },
    {
iconUrl:notesIcon.src,
title:'Take Notes',
description:"Take your own notes while reading any document"
  }
]
  useEffect(() => {
    let bg = {
      bgType: bgTypes.image,
      imageUrl: landingPic.src,
      textTheme: "light",
    };
    if (units.length == 0) {
      dispatch(getData(UNITS));
      dispatch(setLoading(false));
    }
       if(bgUrl!=landingPic.src){
      dispatch(setBackground(bg));
    }

    return () => {
      dispatch(setLoading(false));
      // dispatch(setBackground({
      //   bgType:bgTypes.color,
      //   imageUrl:""

      // }));

    };
  }, [dispatch, units, bgUrl]);
  return (
    <div className="px-8 md:px-24 2xl:px-48 py-12 ">
      <div className="flex items-center text-center justify-center flex-col gap-8 md:w-[600px] mx-auto">
        <h1 className="text-xl text-accent font-bold ">Laibu</h1>
        <p data-id='vp' className="md:text-6xl text-5xl break-words font-header font-bold text-white">
          Never have to worry about notes again
        </p>
        <p data-id='landing-description' className="text-slate-300  text-2xl w-3/4 font-header md:text-3xl">
          Laibu is a platform for students to access all course content
        </p>
        <CTA />
        {/* <Search source={units} placeholder="Search Unit code or Name" /> */}
      </div>
        <Features features={features}/>
    </div>
  );
};

export default Landing;
