import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionAdd, actionSub ,actionDivide, actionMultiply } from '../redux/actions/count_action';

export default function Actions2() {

    // 使用useSelector将redux中管理的状态取出
    let {number} = useSelector(state => state.count_reducer);
    // 使用useState来快速获取/更新状态
    const [num, setNum] = useState();
    const dispatch = useDispatch();

    // 使用useEffect来监控number的变化，当number发生变化时，则重新设定状态
    useEffect(() => {
        console.log("number has been selected as",number);
        setNum(number);
    }, [number]);

    const add = () =>{
        // 使用dispatch并将action对象传入来激活redux调用reducer执行逻辑
        dispatch(actionAdd(num));
    }

    const sub = () => {
        dispatch(actionSub(num));
    }

    const mul = () => {
        dispatch(actionMultiply(num));
    }

    const div = () => {
        dispatch(actionDivide(num));
    }

        return (
            <div>
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button> 
                <button onClick={mul}>*</button> 
                <button onClick={div}>/</button>
            </div>
        );
}
