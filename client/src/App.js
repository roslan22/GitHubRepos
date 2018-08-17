import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Repositories from './components/Repositories/repositories'
import Bookmarks from './components/Bookmarks/bookmarks'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <Router>
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">GitHub API</h1>
            <Link to="/" className="app-link">Repo Search</Link>
            <Link to="/bookmarks" className="app-link">Bookmarks</Link>
          </header>
          <Route exact path="/" component={Repositories} />
          <Route path="/bookmarks" component={Bookmarks} />
        </div>
        </Router>      
      </Provider>
    )
  }
}

export default App
