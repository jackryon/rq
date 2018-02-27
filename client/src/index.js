import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './stylesheets/index.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import registerServiceWorker from './util/registerServiceWorker'
import configureStore from './store/config-store'
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
