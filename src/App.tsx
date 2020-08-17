import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Index from './index/Index';
import SideMenu from './sidemenu/SideMenu';

interface AppProps{

}

interface AppState{
  sidemenuActive: boolean,
}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Router>
        <div className="wrapper d-flex align-items-stretch">
          <SideMenu active={this.state.sidemenuActive}/>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <div />
            </Route>
            <Route path="/users">
              <div />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
