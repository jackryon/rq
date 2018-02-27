import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { formatDate } from '../util'

export default function configureStore(){
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}
