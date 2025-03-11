//MEMO.JS
import React, { useState } from 'react';
import NewComp from './NewComp';

const Memo = () => {
    const [count,setCount]=useState(0);
    const [input,setInput]= useState('');
    function handleInput(e){
        setInput(e.target.value)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)
       }>Click Me</button>
       <br/>
       <input type='text' value={input} onChange={handleInput}/>
       <hr/>
       <NewComp newCount={count}/>

      
    </div>
  )
}

export default Memo;


//NEWCAMP.JS
import React,{memo} from 'react'

const NewComp = (props) => {
    console.log("newcomp render")
  return (
    <div>
      <h1>NewComp: {props.newCount}</h1>
    </div>
  )
}

export default memo(NewComp);
