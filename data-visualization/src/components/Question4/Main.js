import React, {useState} from 'react'

//Create a web app where I can input a text. 
//Now, create three buttons h1, h2, h3. 
//When I click on any of the button, the text should become h1, h2, or h3
function Main() 
{
    const [fontSize, setFontSize] = useState(10);
    function onClickH1()
    {
        setFontSize(32);
    }
    function onClickH2()
    {
        setFontSize(22);
    }
    function onClickH3()
    {
        setFontSize(12);
    }
    return (
        <div>
            <input type = "text" style = {{fontSize: fontSize + "px"}}></input>
            <button onClick = {onClickH1}>H1</button>
            <button onClick = {onClickH2}>H2</button>
            <button onClick = {onClickH3}>H3</button>
        </div>
    )
}

export default Main;
