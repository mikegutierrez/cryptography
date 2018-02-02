import './style.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';

// Application components
import AuthContainer from './components/Authentication/AuthContainer.jsx';
import Portfolio from './components/Portfolio.jsx';
import Settings from './components/Settings.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={AuthContainer} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </main>
    );
  }
}

export default App;