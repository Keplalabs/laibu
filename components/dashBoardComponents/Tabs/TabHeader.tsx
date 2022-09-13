import React, { useState } from "react";
import {
  ASSIGNMENTS,
  Categories,
  NOTES,
  VIDEOS,
} from "../../../utils/constants";
type Props = {
  active: number;
  handleClick: (x: number) => void;
};

function TabHeader(props: Props) {
  return (
    <ul className="flex md:px-4 sm:px-2 sm:mt-4 w-full justify-evenly">
      {Categories.map((tab, i) => (
        <div onClick={() => {
              props.handleClick(i);
            }} className={`flex items-center transition ease-in-out duration-300 justify-evenly ${props.active==i && "bg-slate-100/40 p-2 rounded-t-md"}`}key={i}>
          <span className="mx-2">
            {tab.label === NOTES && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12.3694H12V10.4384H0V12.3694ZM0 0.783203V2.71424H18V0.783203H0ZM0 7.54182H18V5.61079H0V7.54182Z"
                  fill="#09A61E"
                />
              </svg>
            )}
            {tab.label === ASSIGNMENTS && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8333 1.7967H10.35C10 0.863362 9.08333 0.1875 8 0.1875C6.91667 0.1875 6 0.863362 5.65 1.7967H2.16667C1.25 1.7967 0.5 2.52083 0.5 3.40589V14.6703C0.5 15.5553 1.25 16.2795 2.16667 16.2795H13.8333C14.75 16.2795 15.5 15.5553 15.5 14.6703V3.40589C15.5 2.52083 14.75 1.7967 13.8333 1.7967ZM8 1.7967C8.45833 1.7967 8.83333 2.15876 8.83333 2.60129C8.83333 3.04382 8.45833 3.40589 8 3.40589C7.54167 3.40589 7.16667 3.04382 7.16667 2.60129C7.16667 2.15876 7.54167 1.7967 8 1.7967ZM9.66667 13.0611H3.83333V11.4519H9.66667V13.0611ZM12.1667 9.84267H3.83333V8.23348H12.1667V9.84267ZM12.1667 6.62428H3.83333V5.01509H12.1667V6.62428Z"
                  fill="#CD6AFC"
                />
              </svg>
            )}
            {tab.label === VIDEOS && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1667 4.3453V1.52921C12.1667 1.08668 11.7917 0.724609 11.3333 0.724609H1.33333C0.875 0.724609 0.5 1.08668 0.5 1.52921V9.57518C0.5 10.0177 0.875 10.3798 1.33333 10.3798H11.3333C11.7917 10.3798 12.1667 10.0177 12.1667 9.57518V6.75909L15.5 9.97748V1.12691L12.1667 4.3453Z"
                  fill="#D41305"

                />
              </svg>
            )}
            
          </span>

          <button
            // className={lighttheme?styles.tabNav:styles.tabNavDark}
            
          >
            <li className="tab-nav-item text-lg capitalize ml-2" key={i}>
              {tab.label}
              <span
                className={props.active === i ? "active slider" : "slider"}
              ></span>
            </li>
          </button>
        </div>
      ))}
    </ul>
  );
}

export default TabHeader;
