import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function ChildPage1() {
  return (
    <div>
        ChildPage1
        <br />
        <button><NavLink to="grandChildPage1">Grand Child 1</NavLink></button>
        <button><NavLink to="grandChildPage2">Grand Child 2</NavLink></button>
        <Outlet />
        <hr />
    </div>
  )
}
