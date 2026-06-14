import React, { memo } from 'react'

function Childcomponent({onClick}) {
    console.log("child")
  return (
    <>
    <button onClick={onClick}>Child click</button>
    </>
  )
}

export default memo (Childcomponent)