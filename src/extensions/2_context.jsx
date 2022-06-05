import React, { createContext } from 'react'
import { useState } from 'react';

// 初始化Context和子组件Provider/Consumer
const DemoContext = createContext("demoContext");
const {Provider, Consumer} = DemoContext;

export function Context() {
    // 在function组件中定义状态
    const [name, setName] = useState("will");
    const [age, setAge] = useState(29); 

  return ( 
    <div>
        <div>Parent conponent</div>
        <div>
            <span>name:{name}</span>
            <span>age:{age}</span>
        </div>
        {/* 使用Provider, 调用子组件并传递值 */}
        <Provider value={{name, age}}>
                <ChildContext />
        </Provider>
    </div>
  )
}

export function ChildContext(){

    return (
        <div>
            <div>Child conponent</div>
            {/* 使用Consumer，接收父组件传递的值 */}
            <Consumer>
                {value => {
                 return (
                    <div>
                        <span>name:{value.name}</span>
                        <span>age:{value.age}</span>
                    </div>
                )   
                }}
            </Consumer>
        </div>
      )
}
