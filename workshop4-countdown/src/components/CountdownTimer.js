import { useEffect, useState } from "react"
import StopButton from "./StopButton";
import TimerDisplay from "./TimerDisplay";

const CountdownTimer =()=>{
    var a = 10
    const [seconds, setSeconds] = useState(a);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(()=>{
        if (!isRunning) return;
        
        const intervalId = setInterval(() => {
            setSeconds((prev)=> prev - 1);
        }, 1000);
        
        return () => clearInterval(intervalId);
    },[isRunning]);

    useEffect(()=>{
        if(seconds === 0){
            setIsRunning(false)
        }
    },[seconds])

const ToggleButton=()=>{
    setIsRunning(prev => !prev);
}

    return(
        <>
            <StopButton onClick={ToggleButton} />
            <TimerDisplay value={seconds} />
        </>
    )
}

export default CountdownTimer