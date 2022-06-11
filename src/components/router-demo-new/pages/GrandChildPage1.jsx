import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function GrandChildPage1() {

    const [id, setId] = useState();
    const [name, setName] = useState();

    const onChangeId = (event) => {
        setId(event.target.value);
    }

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const navigate = useNavigate();

    const goToLastChild4 = () => {
        navigate("lastChild4", {state:{id, name}});
    }

  return (
    <div>
        GrandChildPage1
        <br />
        id: <input type="text" onChange={event => onChangeId(event)}/><br />
        name: <input type="text" onChange={event => onChangeName(event)}/><br />
        {/* NavLink传递参数方法1:
            在地址栏中写入参数/param，然后在route中匹配，最后在新的元素中用useParam()来获取对应key的value */}
        <button><NavLink to={`lastChild1/${id}/${name}`}>check out last child 1</NavLink></button>
        <br />
        {/* NavLink传递参数方法2:
            在地址栏中写入参数?param=value，route中不需匹配，最后在新的元素中用useSearchParam()来获取对应key的value */}
        <button><NavLink to={`lastChild2?id=${id}&name=${name}`}>check out last child 2</NavLink></button>
        <br />
        {/* NavLink传递参数方法3:
            在地址栏中写入参数?param=value，route中不需匹配，最后在新的元素中用useSearchParam()来获取对应key的value */}
        <button><NavLink to="lastChild3" state={{id,name}}>check out last child 3</NavLink></button>
        <br />
        {/* NavLink传递参数方法4:
            用useNavigate hooks指定路径和state，跳转页面并传递参数 */}
        <button onClick={goToLastChild4}>check out last child 4</button>
        <br />
        {/* 使用Outlet来预留子组件渲染的位置 */}
        <Outlet />
    </div>
  )
}
