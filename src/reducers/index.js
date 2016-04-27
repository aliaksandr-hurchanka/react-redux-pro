import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import field from './field'

export default combineReducers({
    page,
    user,
    field
})
