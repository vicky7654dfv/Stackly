import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Clock from '../../pages/Clock/Clock';

export default function LiveTime() {
    const {zone} =useParams()
    const [time, setTime]=useState("")


    const updateTime = useCallback(() =>{
         try {
      const now = new Date().toLocaleString("en-US", { timeZone: zone });
      setTime(now);
    } catch {
      setTime("Invalid Timezone");
    }
  }, [zone]);

    useEffect(()=>{
        updateTime();
        const interval = setInterval(updateTime, 1000)
        return ()=> clearInterval(interval)
    },[updateTime])


  return (
    <div className='liveTimeWrap'>
        <h2>Live clock</h2>
        <p>Timezone: {zone}</p>
        <h1>{time}</h1>
      <Link to="/Asia" element={<Clock />}>Clock page</Link>
    </div>
  )
}
