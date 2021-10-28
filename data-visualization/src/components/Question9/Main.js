import React from 'react'
import {useState} from "react";
//Here's an API. It will give an error. Write a web app, 
//call this API and read the error message. Show user the error message.


//http://localhost:8000
function Main() {
    const [error, setError] = useState("");
    function click(){
        fetch("http://localhost:8000")
        .then(response => {
           if(response.status === 404)
           {
               //console.log(response)
               throw new Error('Error Happened');
           }
        })
        .catch(err => 
        {
            console.log(err.message);
            setError(err.message);
        })
    }
    return (
        <div>
            <button onClick = {click}>Click Me</button>  
            {error}        
        </div>
    )
}

export default Main
