import React, { useState, useEffect } from "react";

function Clicker() {
    const [count, setCount] = useState(0);

    const [countClick, setCountClick] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const incrementClick = () => {
        setCountClick(countClick + 1);
    }

    const decrementClick = () => {
        setCountClick(countClick - 1);
    }

    useEffect(() => {
        console.log("From clicker");

        return () => console.log("goodbuy");
    }, [count]);

    return (
        <div>
            <button onClick={increment}>{count}</button>
            <div>
                <button onClick={decrementClick}>-</button>
                <span style={{margin: "0 0.75rem", display: "inline-block"}}>{countClick}</span>
                <button onClick={incrementClick}>+</button>
            </div>
        </div>
    );
}

export { Clicker }