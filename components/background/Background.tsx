import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { bgTypes } from '../../utils/constants';

type Props={
    bgType:string,
    bgImgUrl:string,
    bgColor:string,
}
function Background({bgType,bgImgUrl='',bgColor='#fff'}:Props) {
    let [activeBackground,setActiveBackground]=useState({})
    console.log(bgImgUrl)
    
    const backgroundStyles={
        base:{
        position: "absolute",
        top:0,
        bottom: 0,
        zIndex:-1,
        minHeight:"100vh",
        width:"100%",
        height:"100%",
        },
      
        colorBg:{
            backgroundColor:bgColor
        },
        imageBg:{
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"contain",
            
        },
    }
    useEffect(()=>{
        switch(bgType){
            case bgTypes.image:
                setActiveBackground(backgroundStyles.imageBg)
                break
            case bgTypes.color:
                setActiveBackground(backgroundStyles.colorBg)
                break
            default:
                setActiveBackground(backgroundStyles.colorBg)
            }
        return ()=>{
            setActiveBackground({})
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[bgType])
   
    
    return (
        // <div style={{...backgroundStyles.base,...activeBackground}}>
        <div className={`absolute w-full min-h-screen top-0 left-0 ${bgType==bgTypes.image?``:""} ${bgType==bgTypes.color&&`bg-${bgColor}-500`}`} >
        </div>
    )
}

export default Background
