
import React, { useEffect, useState } from 'react'

function App() {
  const [age, setAge] = useState(0)
  const [doubleage, setdoubleAge] = useState(0)

useEffect(() => {
  

console.log("useEffect")
}, [age])



  return (
    <div>
      
    </div>
  )
}

export default App
