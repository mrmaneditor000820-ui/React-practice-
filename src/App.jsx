// import React, { useCallback, useState } from 'react'
// import Childcomponent from './Childcomponent';

// function App() {

// const [count, setCount] = useState(0)

// const handleclick = useCallback( ()=>{
//   console.log("cliclk");
  
// },[])




//   return (
//     <>
//     <h1>Count Value is {count}</h1>
//     <button onClick={()=>setCount (count+1)}>Increament</button>

//     <Childcomponent onClick={handleclick}/>
//     </>
//   )
// }

// export default App

import React from 'react'
import useCounter from './useCounter'

function App() {
   
  const {Increament,Dcreament,Reset,count} = useCounter()

  return (
    <>
    <h1>Count value is : {count}</h1>
    <button onClick={Increament}>Increment</button>
    <button onClick={Dcreament}>Dcrement</button>
    <button onClick={Reset}>Reset</button>
    </>
  )
}

export default App