import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './stylesheets/index.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './util/registerServiceWorker'
import allReducers from './reducers'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(
  allReducers,
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
