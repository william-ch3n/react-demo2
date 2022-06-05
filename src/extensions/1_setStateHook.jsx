import React, { useEffect, useRef, useState } from 'react'
import ReactDom from 'react-dom'

export default function SetStateDemo() {

    // 调用useState hook返回一个state和一个更新state的函数
    const [name, setName] = useState("none");
    // useState也可以接受一个函数。该函数是接收一个状态，然后返回一个新的状态
    const [age, setAge] = useState( preAge => preAge +1);

    const commentRef = useRef();

    const enter = (event) => {
        // 第一种方式
        setName(event.target.value);
    }

    // 当组件第一次加载的时候，调用。
    // 之后当状态name发生改变的时候也调用一次。
    useEffect(() => {
      console.log("useEffect!");
      // return函数在状态发生变化的时候，每次都会被调用。
      // 另外在组件unmount的时候也会被调用一次
      return () => {
        console.log("use effect before unmount the component...");
      }
    }, [name]) // 监视name状态，当name状态发生变化则调用一次useEffect
    
    const unmount = () => {
      ReactDom.unmountComponentAtNode(document.getElementById("root"));
    }

    const showComment = () => {
      alert("comment: "+commentRef.current.value);
      console.log("comment:",commentRef.current.value);
    }

  return (
    <div>
        <h1>Show name: {name}</h1>
        <input type="text" placeholder="input name" onChange={event => enter(event)}/>
        <input type="text" placeholder="comment" ref={commentRef}/>
        <button onClick={unmount}>unmount</button>
        <button onClick={showComment}>show comment</button>
    </div>
  )
}
