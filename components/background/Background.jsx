import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { bgTypes } from '../../utils/constants';

function Background({}) {
    let [activeBackground,setActiveBackground]=useState({})
    let backgroundImageUrl=useSelector(state=>state.background.imageUrl)
    let bgColor=useSelector(state=>state.background.bgColor)
    let gradientColor1=useSelector(state=>state.background.gradientColor1)
    let gradientColor2=useSelector(state=>state.background.gradientColor2)
    let backgroundType=useSelector(state=>state.background.bgType)
    
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
        gradientBg:{
            linearGradient:`45deg ${gradientColor1} ${gradientColor2}`
        },
        colorBg:{
            backgroundColor:bgColor
        },
        imageBg:{
            backgroundImage:`url(${backgroundImageUrl})`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"cover"
        },
    }
    useEffect(()=>{
        switch(backgroundType){
            case bgTypes.image:
                setActiveBackground(backgroundStyles.imageBg)
                break
            case bgTypes.gradient:
                setActiveBackground(backgroundStyles.gradientBg)
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
    },[backgroundType])
   
    
    return (
        <div style={{...backgroundStyles.base,...activeBackground}}>
            
        </div>
    )
}

export default Background
