import React, { useState, useEffect } from "react";
import styles from "./steps.module.css";
import { OptionButton, SelectedButton } from "../styledComponents/Buttons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  selectSemester,
  selectYear,
} from "../../redux/selected/selectedActions";
const BasicSelect = ({ placeholder, dataType, options,setFilled }) => {
  const [selected, setSelected] = useState(null)
  const dispatch = useAppDispatch();
  const selectedCourse = useAppSelector((state) => state.selected.selectedCourse);
  const selectedYear = useAppSelector((state) => state.selected.selectedYear);
  const selectedSemester = useAppSelector(
    (state) => state.selected.selectedSemester
  );
  useEffect(() => {
    switch (dataType){
     case "year":
       setSelected(selectedYear)
        break
      case "semester":
        setSelected(selectedSemester)
    }
  }, [dataType,selectedYear,selectedSemester])
  useEffect(()=>{
        if (selected){setFilled(true)}
        else{
          setFilled(false)
        }
        return()=>{
          setFilled(false)
        }
  
  },[selected,setFilled])
  
  const select = (value) => {
    setFilled(true)
    switch (dataType) {
      case "year":
        dispatch(selectYear(value));
        break
      case "semester":
        dispatch(selectSemester(value));
        break
      default:
        return;
    }
  };
  return (
    <div className={styles.selectContainer}>
      <h4 className='text-xl text-slate-300'>{placeholder}</h4>
      <ul className={styles.selectOptions}>
        {options.map((opt, i) =>
          opt.value === selected ? (
            <SelectedButton key={i}>{opt.label}</SelectedButton>
          ) : (
            <OptionButton
              onClick={() => select(opt.value)}
              key={i}
              value={opt.value}
            >
              {opt.label}
            </OptionButton>
          )
        )}
      </ul>
    </div>
  );
};
export default BasicSelect;
