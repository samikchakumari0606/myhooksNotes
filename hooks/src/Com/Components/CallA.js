import React,{memo} from 'react'

const CallA = () => {
    console.log("child A");

  return (
    <div>CallA</div>
  )
}

export default memo(CallA);