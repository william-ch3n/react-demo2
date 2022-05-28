import { COUNT_ACTION_TYPES } from "../Constants"

export function actionAdd(value){
    return {type:COUNT_ACTION_TYPES.ADD, value}
}

export function actionSub(value){
    return {type:COUNT_ACTION_TYPES.SUB, value}
}

export function actionMultiply(value){
    return {type:COUNT_ACTION_TYPES.MULTIPLY, value}
}

export function actionDivide(value){
    return {type:COUNT_ACTION_TYPES.DIVIDE, value}
}

export function storeNumber(value){
    return {type:COUNT_ACTION_TYPES.STORE_NUMBER, value}
}