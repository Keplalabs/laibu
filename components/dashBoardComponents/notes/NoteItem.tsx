import React from "react";
import Button from "@material-ui/core/Button";
import Link from "../../../public/icons/linkDark.png";
import Downloadicon from "../../../public/icons/downloadIcon.png";
import { getLinks } from "../../../utils/helpers";
import Image from "next/image";
type Props = {
  item: object;
  showLink: boolean | null;
};
function NoteItem(props) {
  const note = props.item;
  const showlink = props.showlink;
  let name = note.name;
  let ext = ".pdf";
  const nameparts = note.name.split(".");
  if (nameparts.length > 1) {
    ext = nameparts[nameparts.length - 1];
    name = nameparts.slice(0, nameparts.length - 1);
    name = name.join(".");
  }
  let { icon, link, downloadLink } = getLinks({
    ext: ext,
    gid: note.gid || note.id,
    category: note.category,
  });

  return (
    <li
      className="flex justify-between px-4 transition-all hover:bg-slate-600 hover:text-blue-200"
      key={note.id}
    >
      <div className="flex px-4 items-center justify-between">
        {icon ? (
          <Image
            className="mx-4 object-contain"
            width={15}
            height={15}
            src={icon}
            alt=""
          />
        ) : null}
        <h4 className="lg:mx-4 mx-2 text-xl sm:mx-2">{name.toLowerCase()}</h4>
      </div>
      <div className="flex p-2 justify-evenly items-center text-cyan-500">
        {note.size ? <h4>{parseInt(note.size) / 1024}</h4> : null}
        {note.category !== "video" ? (
          <a
            className="hover:text-cyan-200 inline-block p-4 bg-transparent  font-medium text-xs leading-tight uppercase rounded hover:bg-gray-500  focus:outline-none focus:ring-0 transition duration-300 ease-in-out"
            target="_blank"
            href={downloadLink}
            rel="noreferrer"
          >
            <svg
              className="fill-current w-4 h-4 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
          </a>
        ) : null}
        {showlink && (note.gid || note.id) && (
          <a
            className=" lg:mx-4 sm:mx-2 ml-4 inline-block p-4  bg-transparent  leading-tight uppercase rounded hover:bg-gray-500  focus:outline-none focus:ring-0  transition duration-300 ease-in-outhover:text-cyan-200"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
        {note.link && note.link.length > 0 && (
          <a
            className="hover:text-cyan-200 ml-4 sm:ml-2 inline-block p-4 bg-transparent leading-tight uppercase rounded hover:bg-gray-500  focus:bg-gray-500 focus:outline-none focus:ring-0  transition duration-300 ease-in-out"
            href={`${note.link}`}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </a>
        )}
      </div>
    </li>
  );
}

export default NoteItem;
