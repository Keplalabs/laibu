import React,{useState,} from "react";
import NoteItem from "./NoteItem";

function Notes(props) {
  const data = props.currentData;
  const resources = data.resources;
  const [ids, setIds] = useState([])
  let showlink = props.showlink;

  return resources.length > 0 ? (
    <div className="p-2 ">
      <ul className="flex flex-col h-full max-h-[500px] 2xl:max-h-[600px]  overflow-y-auto">
        {resources.map((el, i) => {    
         return <NoteItem key={i} item={el} showlink={showlink} />
        }
          )}
      </ul>
    </div>

  ) :  
	<h2 className='text-2xl my-8 p-4'>No content current available here,we are working hard to make sure you never have to see this place empty again,if you have any content,you can also <a href='/contribute'>contribute</a> and help others! </h2>

}

export default Notes;
