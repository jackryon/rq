import { combineReducers } from 'redux'
import ActiveFormReducer from './reducer-active-form'

const rqApp = combineReducers({
  activeForm: ActiveFormReducer
})

export default rqApp
