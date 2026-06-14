import React, { memo } from 'react'

function Childcomponent() {
    console.log("child")
  return (
    <>
    </>
  )
}

export default memo (Childcomponent)