import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import BasicSelect from "./Select";
import Search from "../search/Search";
import styles from "./steps.module.css";

function Step({ data,source }) {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className={styles.stepContainer}>
      {data.inputType === "select" && (
        <BasicSelect
          dataType={data.dataType}
          options={data.options}
          placeholder={data.inputPlaceholder}
        />
      )}
      {data.inputType === "text" && (
        <Search  clear={true} source={source} placeholder={data.inputPlaceholder} />
      )}
    </div>
  );
}

export default Step;
