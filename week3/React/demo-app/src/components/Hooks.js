/* 
    Stateful vs Stateless
    Stateful - values or code that can change in realtime (i.e. counters)
    Stateless - values or code that NEVER change (i.e. plain info)

    Hooks: Custom functions for STATEFUL code, start normally with the use of 'use'
*/
import React,{ useState } from 'react'

const Hooks = () => {
    const [count,setCount] =useState(0);
    const increment = ()=>{
        setCount(count ++);
    }  
    return (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Click me!</button>
        </div>
      );
}

export default Hooks;