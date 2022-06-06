import React from 'react'
import { useParams } from 'react-router-dom'

export default function LastChild1() {

    // 使用useParam()来获取在地址中传入的参数的值
    const {id, name} = useParams();

  return (
    <div>
        Last Child 1
        <br />
        <div>show data</div>
        <ol>
            <li>id:{id}</li>
            <li>name:{name}</li>
        </ol>
    </div>
  )
}
