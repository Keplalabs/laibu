import React,{useState,useEffect} from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { useSelector } from 'react-redux';
import { bgTypes } from "../../utils/constants";

function DefaultNavigation() {
  const [lightTheme, setTheme] = useState(false);
  const textTheme=useSelector(state=>state.background.textTheme)
  return (
    <div className={`flex ${textTheme=='light'?'text-white':'text-slate-800'} w-full group-hover:text-accent px-48 p-2 pt-6 justify-between`}>
      <Link href="/" passHref>
        <h1 className='text-3xl  hover:cursor-pointer font-bold'>Laibu</h1>
      </Link>
      <div className={styles.navList}>
        <ul className="flex flex-row p-2 items-center">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/auth/login">
              <a className="bg-accent py-2 px-6 rounded-full">Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DefaultNavigation;
