import {
    ADD_DONE,
    SET_SELECTION,
    RESET_SELECTION,
    NEW_TURN,

} from '../actions'

const initialAppState = {
    done_words: [],
    selection: '',
    new_turn: true,
}

function mainreducer(state = initialAppState, action){

    switch(action.type){
        case ADD_DONE :
            return {
                ...state,
                done_words: [...state.done_words, action.name],
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
        case NEW_TURN :
            return{
                ...state,
                new_turn: !state.new_turn,
            }
        default :
            return state        
    }
}

export default mainreducer