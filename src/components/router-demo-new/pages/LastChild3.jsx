import React from 'react'
import { useLocation } from 'react-router-dom'

export default function LastChild3() {
    // 获取上一个元素通过router传递的参数方法3:
    // 使用useLocation来获取传入的state
    // 然后直接从state上获取对应的value
    const {state} = useLocation();

    return (
        <div>
            Last Child 3
            <br />
            <div>show data</div>
            <ol>
                <li>id:{state.id}</li>
                <li>name:{state.name}</li>
            </ol>
        </div>
    )
}
