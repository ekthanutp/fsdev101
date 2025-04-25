import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [countStatus, setCountStatus] = useState("หยุดอยู่");
  
  const myRef = useRef(0);
  const handleClick = () =>{
    myRef.current += 1;
    console.log("Click ครั้งที่:", myRef.current);
  }

  useEffect(() => {
    if (!isRunning) return;
    if (seconds < 1){
        setCountStatus("หยุดอยู่");
        return;
    }
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning,seconds]);

  useEffect(() => {
    if (seconds === 0) {
      setIsRunning(false);
      setCountStatus("หยุดอยู่");
    }
  }, [seconds]);

  return (
    <>
      <div>
        <label>{countStatus}</label>
      </div>
      <label>{seconds}</label>
      <div>
        <button onClick={() => {
            setIsRunning(true)
            setCountStatus("กำลังนับอยู่");
            handleClick();
            }}>Start</button>
        <button onClick={() => {
            setIsRunning(false)
            setCountStatus("หยุดอยู่");
            }}>Pause</button>
        <button
          onClick={() => {
            setSeconds(5);
            setIsRunning(false);
            setCountStatus("หยุดอยู่");
          }}>Reset</button>
      </div>
      <div><label>นับจำนวนการคลิก</label></div>
      <div><label>{myRef.current}</label></div>
      <div>
        <button onClick={handleClick}>CountClick</button>
      </div>
    </>
  );
};

export default Timer;
