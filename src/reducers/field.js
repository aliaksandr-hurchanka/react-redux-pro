import { ADD_STRING } from '../constants/Field'

const initialState = {
    string: 'hello'
}

export default function field(state = initialState, action) {

    switch (action.type) {
        case ADD_STRING:
            return { ...state, string: action.payload }

        default:
            return state;
    }
}
    