import React from "react";
import Link from "next/link";
// reactstrap components
import Image from "next/image";
import styles from "./Navigation.module.css";
import userIcon from "../../public/icons/userIcon.png";
import Search from "../search/Search";
import { signOut } from "next-auth/react";
import { setSelectedUnit } from "../../redux/search/SearchActions";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Unit } from "../../redux/data/dataTypes";

function DashNavbar() {
  const dispatch = useAppDispatch();
  const units = useAppSelector((state) => state.data.units);

  const setActiveUnit = (unit:Unit) => {
    dispatch(setSelectedUnit(unit))
  };

  return (
    <>
      <div className='flex justify-between items-center px-12 py-4'>
        <Link href="/" passHref>
          <a className={styles.logo}>LAIBU</a>
        </Link>
        <div className={styles.searchContainer}>
          <Search source={units} callback={setActiveUnit} />
        </div>
          <div className={styles.navList}>
        <ul className="flex flex-row p-2 items-center">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <button onClick={()=>signOut()} className='font-bold'>
              <a>Logout</a>
            </button>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default DashNavbar;
