export const SET_SELECTION = 'SET_SELECTION'
export const RESET_SELECTION = 'RESET_SELECTION'
export const ADD_DONE = 'ADD_DONE'

export function setSelection({name}){
    return {
        type: SET_SELECTION,
        name
    }
}

export function resetSelection(){
    return {
        type: RESET_SELECTION
    }
}

export function addDone({name}){
    return{
        type: ADD_DONE,
        name
    }
}