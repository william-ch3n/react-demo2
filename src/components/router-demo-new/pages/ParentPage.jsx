import React, {useState} from 'react'
import { NavLink, useNavigate, useRoutes } from 'react-router-dom'
import ChildPage1 from './ChildPage1'
import ChildPage2 from './ChildPage2'
import '../css/router-demo-new.css'
import allRoutes from '../routes/allRoutes'


export default function ParentPage() {
    // useRoutes注册路由表
    const ParentPageRoutes = useRoutes(allRoutes);
    const navigate = useNavigate();

    const changeCss = (props) => {
        console.log(props.isActive);
        return props.isActive ? "navLink-active" : "navLink-inactive";
    }

    const back = () => {
        navigate(-1);
    }

    const forward = () => {
        navigate(1);
    }

  return (
    <div>
        <h1>Parent page</h1>
        <button onClick={back}>back</button>
        <button onClick={forward}>forward</button>
        <br />
        <NavLink className={props => changeCss(props)} to="/childPage1">Child Page 1</NavLink>
        <NavLink className={props => changeCss(props)} to="/childPage2">Child Page 2</NavLink>
        {/* 插入ParentPageRoutes来指定子组件们的展示位置 */}
        {ParentPageRoutes}
    </div>
  )
}
