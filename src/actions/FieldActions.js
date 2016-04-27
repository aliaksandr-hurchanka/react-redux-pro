// This is action creator

import { ADD_STRING } from '../constants/Field'

export function addString() {

    return (dispatch) => {

        dispatch({
            type: ADD_STRING,
            payload: 'Test'
        })
    }
}
    