import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState'
import './App.css';

const App = () => {

  const [alert, setAlert] = useState(null);


  // Show Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  }


  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert}/>
            <Switch>
              <Route 
                exact 
                path="/" 
                render={props => (
                  <Fragment>
                    <Search 
                      showAlert={showAlert}
                    />
                    <Users />
                  </Fragment>
                )} 
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch> 
          </div>
        </div>
      </Router>
    </GithubState>
  );


  
}


export default App;
