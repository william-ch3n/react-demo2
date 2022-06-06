import React from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function LastChild4() {
    // 获取上一个元素通过router传递的参数方法3:
    // 使用useLocation来获取传入的state
    // 然后直接从state上获取对应的value
    const {state} = useLocation();
    // PUSH: PUSH的方法进入页面
    // REPLACE: REPLACE的方式进入页面
    // POP: 刷新页面
    const navigationType = useNavigationType()

    console.log("navigation type:", navigationType);

    return (
        <div>
            Last Child 4
            <br />
            <div>show data</div>
            <ol>
                <li>id:{state.id}</li>
                <li>name:{state.name}</li>
            </ol>
        </div>
    )
}
