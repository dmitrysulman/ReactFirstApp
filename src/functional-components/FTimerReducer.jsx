import React, { useEffect, useReducer } from "react";

const timeReducer = (state, {type}) => {
    if (type === "START") {
        return {
            ...state,
            timerStarted: true,
        };
    } else if (type === "STOP") {
        return {
            ...state,
            timerStarted: false,
        };
    } else if (type === "RESET") {
        return {
            time: 0,
            timerStarted: false,
        };
    } else if (type === "TICK") {
        return {
            ...state,
            time: state.time + 1,
        };
    }

    return state;
}

function initializeTimer() {
    const initialTime = localStorage.getItem("time");
    return initialTime ? +initialTime : 0;
}

function FTimerReducer() {
    const [{time, timerStarted}, dispatch] = useReducer(timeReducer, {time: initializeTimer(), timerStarted:false});

    const toggleTimer = () => {
        if (timerStarted) {
            dispatch({type: "STOP"});
        } else {
            dispatch({type: "START"});
        }
    }

    useEffect(() => {
        let timerId = null;
        if (timerStarted) {
            timerId = setInterval(() => {
                dispatch({type: "TICK"});
            }, 1000);
        }

        return () => {
            timerId && clearInterval(timerId);
            timerId = null;
        }
    }, [timerStarted]);

    useEffect(() => {
        localStorage.setItem("time", time);
    }, [time])

    return (
        <div>
            <h3>React Reducer Timer</h3>
            <div>{time}</div>
            <button onClick={toggleTimer}>{timerStarted ? <span>Stop</span> : <span>Start</span>}</button>
            <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
        </div>
    )

}

export { FTimerReducer }