import React from 'react'
import {useState} from "react";

//Here's an API. Create a web app to call this API with your 
//full name and print the response. This could be extended where 
//we ask you to do something with the response. 
//Like add a text, or capitalise etc.
function Main() 
{
    const [name, setName] = useState("");
    function onbuttonClick()
    {
        fetch("https://reqres.in/api/users?name=" + name). //Api to call
        then(response => response.json()) // Converting data to json
        .then(response => { // Data ke sath khelna
            let temp = response.data[0].email;
            temp = temp + "ankur";
            console.log(temp.toUpperCase());
        }) 
        .catch(err => { //Error Handling
            console.log(err);
        });
    }
    return (
        <div>
            <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)}></input>
            <button onClick = {onbuttonClick}>Click Me</button>
        </div>
    )
}

export default Main
