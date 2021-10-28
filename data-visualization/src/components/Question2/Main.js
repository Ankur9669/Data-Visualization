import React from 'react';
import {useState} from "react";
//Create a web app which would take two inputs. 
//It would also have 4 buttons: +, -, x /. 
//Based on the button clicked perform the operation on the two inputs.
// You can do this in React or vanillaJS based on your choice.
function Main() {
    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();
    const [result, setResult] = useState("");
    
    function add()
    {
        setResult(parseInt(input1) + parseInt(input2));
    }
    function sub()
    {
        setResult(parseInt(input1) - parseInt(input2));
    }
    function mul()
    {
        setResult(parseInt(input1) * parseInt(input2));
    }
    function div()
    {
        setResult(parseInt(input1) / parseInt(input2));
    }
    return (
        <div>
            <input type = "number" value = {input1} onChange = {(e) => setInput1(e.target.value)}></input>
            <input type = "number" value = {input2} onChange = {(e) => setInput2(e.target.value)}></input>

            <button onClick = {add}>+</button>
            <button onClick = {sub}>-</button>
            <button onClick = {sub}>*</button>
            <button onClick = {div}>/</button>

            <div>Result is: {result}</div>
        </div>
    )
}

export default Main
