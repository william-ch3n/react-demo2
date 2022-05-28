import { PERSON_ACTION_TYPES } from "../Constants";

export function storePerson(value){
    return {type: PERSON_ACTION_TYPES.STORE_PERSON, value};
}

export function removePersonAction(value){
    return {type: PERSON_ACTION_TYPES.REMOVE_PERSON, value};
}