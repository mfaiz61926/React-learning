// app.js
import React, { useState } from "react";
const App=()=>{
    // console.log(useState())
    const [count,setCount]=useState(0);
    console.log(count);
    console.log(setCount);
    const handleClickInc=()=>{
        setCount(count+1);
    }
    const handleClickDec=()=>{
        setCount(count-1);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClickInc}>+</button>
            <button onClick={handleClickDec}>-</button>
        </div>
    )
}

export default App;




// index.js
import React from "react";
import ReactDOM from "react-dom/client";
// import { Hello } from "./App";
// import App,{Hello} from "./App";
import App from "./App";


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
    <App/>
    
    </React.StrictMode>
)
