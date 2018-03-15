import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from './navigation'
import Login from './login'
import Registration from './registration'
import InputData from './input-data'
import ViewData from './view-data'
import FlashMessages from './flash-messages'
import Users from './admin/users'

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <FlashMessages />
          <div className="container">
            <div className="row">
              <header className="col-xs-12">
                <h1>Welcome to rQ App</h1>
              </header>
            </div>
            <Navigation />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Registration } />
            <Route path="/input-data" component={ InputData } />
            <Route path="/view-data" component={ ViewData } />
            <Route path="/users" component={ Users } />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
