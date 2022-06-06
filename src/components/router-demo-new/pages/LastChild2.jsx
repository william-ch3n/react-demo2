import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function LastChild2() {
    // 获取上一个元素通过router传递的参数方法2:
    // 使用useSearchParams来获取search
    // 然后通过search来get对应key的value
    const [search, setSearch] = useSearchParams();
    const id = search.get("id");
    const name = search.get("name");

    const click = () => {
        setSearch("?id=000&name=change");
    }

    return (
        <div>
            Last Child 2
            <br />
            <button onClick={click}>change contents</button>
            <div>show data</div>
            <ol>
                <li>id:{id}</li>
                <li>name:{name}</li>
            </ol>
        </div>
    )
}
