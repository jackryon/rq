import activeForm from './reducer-active-form'
import { combineReducers } from 'redux'
import { rqs, rqsIsLoading, rqsHasErrored } from './reducer-rqs'
import { defaultRQ } from './reducer-default-rq'
import { defaultHRData } from './reducer-default-hr-data'
import { flashMessage, flashClass } from './reducer-flash-message'

export default combineReducers({
  activeForm,
  rqs,
  rqsIsLoading,
  rqsHasErrored,
  defaultRQ,
  defaultHRData,
  flashMessage,
  flashClass
})
