import React, { useCallback, useState } from 'react'
import Childcomponent from './Childcomponent';

function App() {

const [count, setCount] = useState(0)

const handleclick = useCallback( ()=>{
  console.log("cliclk");
  
},[])




  return (
    <>
    <h1>Count Value is {count}</h1>
    <button onClick={()=>setCount (count+1)}>Increament</button>

    <Childcomponent onClick={handleclick}/>
    </>
  )
}

export default App