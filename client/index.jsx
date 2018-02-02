import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import store from './store';
// import App from './app.jsx';

// Application components
import AuthContainer from './components/Authentication/AuthContainer.jsx';
import Portfolio from './components/Portfolio.jsx';
import Settings from './components/Settings.jsx';

const initializeStore = store();

render(
  <Provider store={initializeStore}>
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path='/' component={AuthContainer} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </main>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

