import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { formatDate } from '../util/helpers'

export default function configureStore(){
  return createStore(
    rootReducer,
    initialState(),
    applyMiddleware(thunk)
  )
}

function initialState(){
  return {
    rqs: [],
    activeForm: 'rqForm',
    rqsIsLoading: true,
    rqsHasErrored: false,
    defaultRQ: {
      rq: 47.65,
      date: formatDate(new Date())
    }
  }
}
