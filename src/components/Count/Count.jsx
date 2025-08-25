import React, { useEffect, useState } from "react";
import Style from "./Count.module.css";

export default function Count() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate]=useState(false)

   useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500); // reset after animation
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className={Style.timeWrap}>
      <h1 className={`${Style.count} ${animate ? Style.fire : ""}`}>Points: {count}</h1>

      <div className={Style.buttonWrap}>
        <button onClick={() => {setCount(count+1)}}>
          <h1>📈 Stonks 🫵</h1>
        </button>
        <button onClick={() => {setCount(count-1)}}>
          <h1>📉 Crash 👎</h1>
        </button>
        <button onClick={() => {setCount(0)}}>
          <h1>😑 Neutral 0️⃣</h1>
        </button>
      </div>

    </div>
  );
}
