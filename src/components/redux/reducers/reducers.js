import { combineReducers } from 'redux'
import count_reducer from "./count_reducer"
import person_reducer from './person_reducer';

// 当有多个reducer的时候，需要将他们合并起来，然后combineReducers的返回值为一个reducer
export default combineReducers(
    {count_reducer, person_reducer}
);