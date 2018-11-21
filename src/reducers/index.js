import {
    ADD_DONE,
    SET_SELECTION,
    RESET_SELECTION

} from '../actions'

const initialAppState = {
    done_words: [],
    selection: ''
}

function mainreducer(state = initialAppState, action){

    switch(action.type){
        case ADD_DONE :
            return {
                ...state,
                done_words: state.done_words.push(action.name), //maybe [action.name]
            }
        case SET_SELECTION :
            return {
                ...state,
                selection: action.name,
            }
            case RESET_SELECTION :
            return {
                ...state,
                selection: '',
            }
        default :
            return state        
    }
}

export default mainreducer