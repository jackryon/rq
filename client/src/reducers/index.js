import { combineReducers } from 'redux'
import activeFormReducer from './reducer-active-form'
import { rqs, rqsIsLoading, rqsHasErrored } from './reducer-rqs'

export default combineReducers({
  activeFormReducer,
  rqs,
  rqsIsLoading,
  rqsHasErrored
})
