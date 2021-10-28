import React, {useState} from 'react'

//Create a web app with a button loaded. 
//Show a text loading... on a web app. 
//However, hide it if I click on the button loaded.
function Main() 
{
    const [loaded, setLoaded] = useState("loading...");
    const [show, setShow] = useState(true);
    function loading()
    {
        setLoaded("");
    }
    function loading1()
    {
        setShow(false);
    }
    return (
        <div>
            

            {/* Way 1 */}
                <div>
                    {loaded}
                </div>
                <button onClick = {loading}>Loaded</button>


            {/* Way 2 */}
                <div style = {{display: show ? "block" : "none"}}>
                    loading....
                </div>
                <button onClick = {loading1}>Loaded2</button>
        </div>
    )
}

export default Main
