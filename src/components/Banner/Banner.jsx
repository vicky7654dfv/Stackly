import React, { useRef, useState } from "react";
import Style from "./Banner.module.css";
import Vid from "../../assets/Banner/vid.mp4";

export default function Banner() {
  const [sec, setSec]=useState(0)
  const timerRef=useRef()

  const beginFn = () =>{
    if(!timerRef.current){
      timerRef.current =setInterval(()=>{
        setSec((prev)=>prev+1)
      },1000)
    }
  }
  const endFn=()=>{
    clearInterval(timerRef.current)
    timerRef.current=null
  }

  const resetFn =()=>{
    clearInterval(timerRef.current)
    timerRef.current=null
    setSec(0)
  }

  return (
    <div className={Style.bannerWrap}>
      <div className={Style.bgVidWrap}>
        <video src={Vid} autoPlay muted controls={false} loop></video>
      </div>
      <div className={Style.timerWrap}>
        <h2>Timer: {sec}</h2> 
        <div className={Style.btnWrap}>
        <button onClick={beginFn}>Begin</button>
        <button onClick={endFn}>End</button>
        <button onClick={resetFn}>Reset</button>
        </div>
      </div>
    </div>
  );
}
