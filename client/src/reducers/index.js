import { combineReducers } from 'redux'
import activeForm from './reducer-active-form'
import { rqs, rqsIsLoading, rqsHasErrored } from './reducer-rqs'

export default combineReducers({
  activeForm,
  rqs,
  rqsIsLoading,
  rqsHasErrored
})
