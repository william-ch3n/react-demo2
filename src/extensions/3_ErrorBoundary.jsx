import React, { useState } from 'react'
import {useErrorHandler, ErrorBoundary, }  from 'react-error-boundary'

export function ErrorBoundaryDemo() {
    // 用于记录error
    const ErrorHandler = (error, info)=> {
        console.log("check error:", error);
        console.log("check info:", info);
    }

  return (
    <div>
        <h1>Parent component</h1>
        {/* 用ErrorBoundery来包裹住可能会发生异常的部分，并指定发生异常时所展示的组件和调用的组件 */}
        <ErrorBoundary FallbackComponent={ErrorComponent} onError={ErrorHandler}>
            <GoodComponent />
        </ErrorBoundary>
    </div>
  )
}

// 发生异常时，展示的组件
export function ErrorComponent() {
    return (
        <div>
            <h3>something went wrong...</h3>
        </div>
    )
}

export function GoodComponent() {

    const [mapObj, setMapObj] = useState([]);
    const handleError = useErrorHandler();

    // 方法1
    // 将mapObj的数据类型改成Object，故意抛出异常
    // 异常不处理，让ErrorBoundary自动处理
    const triggerError1 = () => {
        setMapObj("");
    }

    // 方法2
    // 用try-catch来抛出异常，并用useErrorHandler来抓住异常
    // useErrorHandler会将异常传递给ErrorBoundary中的onError来统一处理
    const triggerError2 = () => {
        try{
            throw new Error("test");
        }catch(error){
            // handleError用于激活ErrorBoundary，并将error传递给ErrorBoundary中的onError
            handleError(error);
        }
    }

    return (
        <div>
            <h1>I'm good component</h1>
            <button onClick={triggerError1}>trigger1</button>
            {/* 遍历输出mapObj中的元素，如果不是map类型则会抛出异常 */}
            {mapObj.map( item => {return(<span>{item}</span>)})}
            <button onClick={triggerError2}>trigger2</button>
        </div>
    )
}
