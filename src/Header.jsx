import React from 'react'
import { useSelector } from 'react-redux';

function Header() {
  const counter = useSelector(state => state.counter)
  return (
    <div>Header {counter}</div>
  )
}

export default Header