import React, { useEffect } from "react";
import CTA from "./CTA";
import Features from './Features'
import boyPic from "../../public/images/bg/boy.png";
import revisionIcon from "../../public/icons/revisionIcon.png";
import notesIcon from "../../public/icons/notesIcon.png";
import targetIcon from "../../public/icons/targetIcon.png";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getData } from "../../redux/data/dataActions";
import { setBackground } from "../../redux/background";
import { UNITS, bgTypes } from "../../utils/constants";
import { setLoading } from "../../redux/loaders/loaderActions";
import { featureProps } from "./propTypes";
import Image from 'next/image'
const Landing = () => {
  const dispatch = useAppDispatch();
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
      bgType: bgTypes.color,
      textTheme: "light",
    };
    if (units.length == 0) {
      dispatch(getData(UNITS));
      dispatch(setLoading(false));
    }
    dispatch(setBackground(bg));
    return () => {
      dispatch(setLoading(false));
      // dispatch(setBackground({
      //   bgType:bgTypes.color,
      //   imageUrl:""

      // }));

    };
  }, [dispatch, units]);
  return (
    <div className="">
      <div className="flex justify-center">

      <div className="flex text-left justify-center flex-col gap-6 md:w-1/3 ">
        <p className="md:text-5xl text-4xl break-words font-header font-bold text-white">
        Read anywhere anytime
        </p>
        <p className="text-slate-300  text-2xl font-header w-3/4">
      gain access to personalized course content
        </p>
        <CTA />
        {/* <Search source={units} placeholder="Search Unit code or Name" /> */}
      </div>
      <Image src={boyPic.src} width={500} height={500} alt='boy reading with computer'/>
      </div>
        <Features features={features}/>
    </div>
  );
};

export default Landing;
