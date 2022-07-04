import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import { bgTypes } from '../../utils/constants';

function Background({}) {
    let [activeBackground,setActiveBackground]=useState({})
    let {imageUrl,bgColor,blurred,bgType, gradientColor1, gradientColor2}=useAppSelector(state=>state.background)
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
            // filter:'blur(4px)',
            backgroundImage:`url(${imageUrl})`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"cover"
        },
    }
    useEffect(()=>{
        switch(bgType){
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
    },[bgType])
   
    
    return (
        <div style={{...backgroundStyles.base,...activeBackground}}>
            
        </div>
    )
}

export default Background
