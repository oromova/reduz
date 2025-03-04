import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/favourites'>Favourites</NavLink>
      <Outlet/>
    </div>
  )
}

export default App