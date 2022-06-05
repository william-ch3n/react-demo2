import { PERSON_ACTION_TYPES } from "../Constants";

const initialState = {
    persons: []
}
    


export default function person_reducer(currentState=initialState, action){

    const {type, value} = action;

    switch(type){
        case PERSON_ACTION_TYPES.STORE_PERSON:
            return {...currentState, persons: [...currentState.persons, value]}
        case PERSON_ACTION_TYPES.REMOVE_PERSON:
            console.log("currentState:",currentState);
            console.log("value:",value);
            return {...currentState, persons: value}
        default:
            return {...currentState}    
    }
}