import { combineReducers } from 'redux'

import persistedSlice from './slices/persistedSlice'
import sessionSlice from './slices/sessionSlice'

export default combineReducers({
    sessionSlice,
    persistedSlice,
})
