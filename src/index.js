/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@containers/home';

import './styles/main.less';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();
