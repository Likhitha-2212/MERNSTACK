import React from 'react'; 
import { useState } from 'react'; 
import Child from "./Child";
const App = () =>{
    const sum =()=>{
        console.log("I am an expensive sum function and i am being called");
        let total=0;
        for(let i=0;i< 10000000000;i++){
            total+=i;
        }
        return total;
    };
    const [count,setCount] = useState(0);
    return(
        <div>
            <p>Count is:</p>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <Child name={name}/>
        </div>
    )
}