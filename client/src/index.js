import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './stylesheets/index.sass'
import registerServiceWorker from './util/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
