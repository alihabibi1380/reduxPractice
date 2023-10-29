import React from 'react'
import { increment, decrement } from './features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)

  return (
    <>
      <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>      
    </>
  )
}

export default App
