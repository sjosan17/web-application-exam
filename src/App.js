import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreatePage from './containers/CreatePage';
import ListPage from './containers/ListPage';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-sm navbar-dark navbar-static-top bg-dark">
          <div className="container-fluid">
            <Link to={'/list'} className="navbar-brand">uTravel</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-center" id="#navbarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item active px-3">
                  <Link to={'/list'} className="nav-link">List</Link>
                </li>
                <li className="nav-item active px-3">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
              </ul>
            </div>
            </div>
          </nav>
          <Switch>
            <Route exact path='/list' component={ListPage} />
            <Route path='/create' component={CreatePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default (App);
