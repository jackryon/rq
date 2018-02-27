import activeForm from './reducer-active-form'
import { combineReducers } from 'redux'
import { rqs, rqsIsLoading, rqsHasErrored } from './reducer-rqs'
import { defaultRQ } from './reducer-default-rq'

export default combineReducers({
  activeForm,
  rqs,
  rqsIsLoading,
  rqsHasErrored,
  defaultRQ
})
