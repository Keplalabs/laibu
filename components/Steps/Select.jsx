import React, { useState, useEffect } from "react";
import styles from "./steps.module.css";
import { OptionButton, SelectedButton } from "../styledComponents/Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSemester,
  selectYear,
} from "../../redux/selected/selectedActions";
const BasicSelect = ({ placeholder, dataType, options }) => {
  const [selected, setSelected] = useState(null)
  const dispatch = useDispatch();
  const selectedCourse = useSelector((state) => state.selected.selectedCourse);
  const selectedYear = useSelector((state) => state.selected.selectedYear);
  const selectedSemester = useSelector(
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
  
  const select = (value) => {
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
      <h4 className={select.placeHolder}>{placeholder}</h4>
      <ul className={styles.selectOptions}>
        {options.map((opt, i) =>
          opt.value === selected ? (
            <SelectedButton>{opt.label}</SelectedButton>
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
