import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import BasicSelect from "./Select";
import Search from "../searchBar/Search";
import styles from "./steps.module.css";

function Step({ data, current }) {
  const currentData = data[current];
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  let {} = data;
  return (
    <div className={styles.stepContainer}>
      {currentData.inputType === "select" && (
        <BasicSelect
          dataType={currentData.dataType}
          options={currentData.options}
          placeholder={currentData.inputPlaceholder}
        />
      )}
      {currentData.inputType === "text" && (
        <Search placeholder={currentData.inputPlaceholder} />
      )}
    </div>
  );
}

export default Step;
