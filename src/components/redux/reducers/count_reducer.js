import { COUNT_ACTION_TYPES } from "../Constants";

// 定义初始状态值
const initialState = {
    result: 0,
    number: 0
}

export default function count_reducer(currentState=initialState, action){
    // action是一个对象，需要将type和value从中取出使用
    const {type, value} = action;

    let {result, number} = currentState;

    switch(type){
        case COUNT_ACTION_TYPES.ADD:{
            result += value*1;
            return { ...currentState, result}
        }
        case COUNT_ACTION_TYPES.SUB:{
            result -= value*1;
            return { ...currentState, result}
        }
        case COUNT_ACTION_TYPES.MULTIPLY:{
            result *= value*1;
            return { ...currentState, result}
        }
        case COUNT_ACTION_TYPES.DIVIDE:{
            result /= value*1;
            return { ...currentState, result}
        }
        case COUNT_ACTION_TYPES.STORE_NUMBER:{
            return { ...currentState, number:value}
        }
        default:{
            return { ...currentState}
        }
    }
}