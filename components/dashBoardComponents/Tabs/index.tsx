import React, { useState, useEffect,useContext } from "react";
import Notes from "../notes/Notes";


import { isEmpty, } from "../../../utils/helpers";
import { Categories } from "../../../utils/constants";
import TabHeader from './TabHeader';
import { ActiveUnitContent } from "../ActiveUnit/ActiveUnit";
type ActiveData={
  notes:object[]
}
type Props={
  activeUnitContent:ActiveUnitContent

}
function Tabs(props:Props) {
  const data = props.activeUnitContent;
  const [active, setActive] = useState(0);
  let [lighttheme, ] = useState(true);
  const [activeData, setActiveData] = useState({ category: "", resources: [] });
  
  const handleClick = (i) => {
      setActive(i);
    };
  useEffect(() => {
    if (!isEmpty(data)) 
    {
      setActiveData({
        category: Categories[active].category,
        resources: data.notes[Categories[active].category], //filter the data by category
      });
    }
  }, [active, data, setActiveData]);
  return (
    <div className="h-full md:p-8 xl:px-12">
    <TabHeader active={active} handleClick={handleClick}/>
      {!isEmpty(data) ? (
        <div className="transition duration-300 bg-slate-100/40 rounded-md mx-auto">
          <Notes showlink={true} currentData={activeData} />
        </div>
      ) :null}
    </div>
  );
}

export default Tabs;
