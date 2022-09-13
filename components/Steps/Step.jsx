import React from "react";
import BasicSelect from "./Select";
import Search from "../search/Search";
import styles from "./steps.module.css";
import { useAppSelector } from "../../redux/hooks";
import UserName from "./UserName";

function Step({ data = {}, source, callback, setFilled }) {
  let course = useAppSelector((state) => state.selected.selectedCourse);

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
      {data.inputType === "text" &&
        (data.dataType == "course" ? (
          <>
            <h4 className="text-slate-300  text-center m-4 text-xl">
              {data.inputPlaceholder}
            </h4>
            {course && (
              <h3 className="p-2 text-xl text-center font-bold text-white bg-green-600 rounded-lg">
                {course?.name}
              </h3>
            )}
            <Search
              setFilled={setFilled}
              clear={true}
              source={source}
              callback={callback}
              placeholder="Course?"
            />
          </>
        ) : data.dataType == "username" ? (
          <>
            <UserName data={data} setFilled={setFilled} />
          </>
        ) : (
          <></>
        ))}
    </div>
  );
}

export default Step;
