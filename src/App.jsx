
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from './Action';
import Header from './Header';


function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <Header/>
      Counter {counter}
      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
    </div>
  )
}

export default App