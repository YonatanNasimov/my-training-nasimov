import React from 'react'
import useCounter from '../hooks/counterHook'

export default function MyHookComp() {
  const [counter,addOneCounter,resetCounter,addCustom] = useCounter(6);


  return (
    <div className='container' style={{minHeight:"130vh"}}>
      <h2>Counter: {counter}</h2>
      <button onClick={addOneCounter}>Add 1</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={() => {
        addCustom(5)
      }}>Add 5</button>
    </div>
  )
}
