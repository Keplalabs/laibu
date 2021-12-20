import axios from "axios";
import { api } from "./urls";
import { COURSES, RECENT, UNITS } from "./constants";


//try catch block to catch invalid regexp characters that user types
export const fileSearch = async (query, notes) => {
  const payload = { query: query };
  let resp = await axios.post(api.routes.searchUrl, payload);
  if (resp.data.message) {
    const message = resp.data.message;
    const { files } = message;
    // files.filter(file=>{
    let ids = [];
    files.map((file) => ids.push(file.id));
    let filteredNotes = notes.filter((file) => ids.includes(file.gid)); //filter the unit notes for the ones that match the topic
    if (filteredNotes.length > 0) {
      return filteredNotes;
    }
    return false;
  }
};
// export const refreshTokenSetup = (res) => {
//   // Timing to renew access token
//   let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
//   const refreshToken = async () => {
//     const newAuthRes = await res.reloadAuthResponse();
//     refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
//     console.log("newAuthRes:", newAuthRes);
//     // saveUserToken(newAuthRes.access_token);  <-- save new token
//     localStorage.setItem("authToken", newAuthRes.id_token);

//     // Setup the other timer after the first one
//     setTimeout(refreshToken, refreshTiming);
//   };

//   // Setup first refresh timer
//   setTimeout(refreshToken, refreshTiming);
// };
export const Search = (term, data, category) => {
  const defaultcategory = "name";
  try {
    let res1 = data.filter((item) =>
      item[category].toLowerCase().match(term.toLowerCase())
    );

    let res2 = data.filter((item) =>
      item[defaultcategory].toLowerCase().match(term.toLowerCase())
    );

    console.log("results",[...res1, ...res2]);
    return [...res1, ...res2];

  } catch(err) {
    console.log(err)
    return [];
  }
};
export const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const isEmpty = (obj) => {
  if (!obj) return true;
  return Object.keys(obj).length === 0;
};
export const getGid = (link) => {
  const ptn = /\/d\/[\w-]+/g;
  const res = ptn.exec(link);
  if (res) {
    let match = res[0].split("/");
    let id = match.pop();
    return id; //google drive id of video
  } else return null;
};
export const Categories = [
  { label: "notes", category: "document" },
  { label: "assignments", category: "assignment" },
  { label: "videos", category: "video" },
];
export const getLocalData = (type) => {
  let storageData = JSON.parse(localStorage.getItem(type));
  if (storageData) {
    if (checkIfExpired(storageData)) return null;
    else {
      return storageData.data;
    }
  }
};
//get no of items in a js object
export const getObjLength = (obj) => {
  return Object.keys(obj).length;
};
export const geticonLink = (ext) => {
  switch (ext) {
    case "pdf":
      return "https://drive-thirdparty.googleusercontent.com/16/type/application/pdf";
    case "docx":
      return "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    case "doc":
      return "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    case "ppt":
      return "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.openxmlformats-officedocument.presentationml.presentation";
    case "pptx":
      return "https://drive-thirdparty.googleusercontent.com/16/type/application/vnd.openxmlformats-officedocument.presentationml.presentation";

    default:
      return null;
  }
};

//LRU algorithm to remove least recently searched item
export const removeLru = (data) => {
  //:params an obj data type
  for (let unit in data) {
    delete data[unit];
    break; // to only delete oldest item
  }
};
export const setLocalData = (key, value, ttl = 72) => {
  //ttl is expiry time of data in terms of hour
  const now = new Date();
  let item;
  switch (key) {
    case RECENT:
      item = {
        data:value,
      };
    default:
      item = {
        data:value,
        expiry: ttl ? now.getTime() + ttl * 3600 * 1000 : null,
      };
  }

  localStorage.setItem(key, JSON.stringify(item));

  return item;
};
//compares current date with expiry date of data and returns true if the current date is greater and viceversa
const checkIfExpired = (data) => {
  if (!data.expiry) return false;
  if (Date.now() > data.expiry) {
    return true;
  }
  return false;
};
