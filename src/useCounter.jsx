import React from 'react'

function useCounter() {

    const [count, setCount] = useState(0)

    const Increament = ()=> setCount(count +1)
    const Dcreament = ()=> setCount(count -1)
    const Reset = ()=> setCount(0)


  return (
        Increament,Dcreament,Reset
  )
}

export default useCounter;