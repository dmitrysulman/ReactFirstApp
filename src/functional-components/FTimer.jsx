import React, { useState, useEffect, useRef } from "react";

function initializeTimer() {
    const initialTime = localStorage.getItem("time");
    return initialTime ? +initialTime : 0;
}

function FTimer() {
    const [time, setTime] = useState(initializeTimer());
    const [timerStarted, setTimerStarted] = useState(false);

    const intervalRef = useRef();

    const toggleTimer = () => {
        setTimerStarted(!timerStarted);
    }

    const resetTimer = () => {
        setTime(0);
        setTimerStarted(false);
    }

    useEffect(() => {
        if (timerStarted) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [timerStarted]);

    useEffect(() => {
        localStorage.setItem("time", time);
    }, [time])

    return (
        <div>
            <h3>React Functional Timer</h3>
            <div>{time}</div>
            <button onClick={toggleTimer}>{timerStarted ? <span>Stop</span> : <span>Start</span>}</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )

}

export { FTimer }