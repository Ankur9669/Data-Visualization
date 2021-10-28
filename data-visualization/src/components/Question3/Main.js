import React from 'react'
import {useState} from "react";
//Create a web app where I can input a text. Now create two buttons + and -.
//On clicking + increase the fontSize by 2px and vice versa. 
function Main() {

    const [fontSize, setFontSize] = useState(22);
    function increase()
    {
        setFontSize(fontSize + 2);
    }
    function decrease()
    {
        setFontSize(fontSize - 2);
    }
    return (
        <div>
            <input type = "text" style = {{fontSize: fontSize + "px"}}></input>
            <button onClick = {increase}>+</button>
            <button onClick = {decrease}>-</button>
        </div>
    )
}

export default Main
