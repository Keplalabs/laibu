import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { hideAlert, showAlert } from '../../redux/alert';
const Alert = ({  timeout = 250, }) => {
  const [isLeaving, setIsLeaving] = useState(false);
const type=useSelector(state=>state.alert.type)
const isShown=useSelector(state=>state.alert.show)
const message=useSelector(state=>state.alert.message)
  let timeoutId = null;

  const dispatch=useDispatch()
useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const closeAlert = () => {
    setIsLeaving(true);
    timeoutId = setTimeout(() => {
      setIsLeaving(false);
      dispatch(hideAlert())
    }, timeout);
  };

  return (
    isShown?(
      <div
        className={`alert ${type} ${isLeaving ? 'leaving' : ''}`}
        role="alert"
      >
        <button className="close" onClick={closeAlert} >&times;</button>
        {message}
      </div>
    ):null
  );
};
export default Alert