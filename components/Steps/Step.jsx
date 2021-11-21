import React,{useEffect} from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import BasicSelect from "./Select";
import { useSelector, } from 'react-redux';
import Search from "../search/Search";
import styles from "./steps.module.css";
import { Button } from '../styledComponents/Buttons';

function Step({ data={},source,callback,setFilled}) {
  const course=useSelector(state=>state.selected.selectedCourse)
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className={styles.stepContainer}>
      {data.inputType === "select" && (
        <BasicSelect
          setFilled={setFilled}
          dataType={data.dataType}
          options={data.options}
          placeholder={data.inputPlaceholder} 
        />
      )}
      {data.inputType === "text" && (
        <>
        <h4 className={styles.placeHolder}>{data.inputPlaceholder}</h4>
        {course&&<h3 className={styles.selectedCourse}>{course.name}</h3>}
        <Search  setFilled={setFilled} clear={true} source={source} callback={callback} placeholder='Course?' /> 
        </>

      )}
    </div>
  );
}

export default Step;
