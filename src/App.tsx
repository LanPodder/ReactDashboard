import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Index from './index/Index';
import SideMenu from './sidemenu/SideMenu';
import SideMenuToggleButton from './sidemenu/SideMenuToggleButton';
import HeaderNav from './header-nav/HeaderNav';

interface AppProps {

}

interface AppState {
  sidemenuActive: boolean,
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      sidemenuActive: true,
    };

    this.toggleSidemenu = this.toggleSidemenu.bind(this);
  }

  toggleSidemenu(): void {
    this.setState({ sidemenuActive: !this.state.sidemenuActive });
  }

  render() {
    return (
      <Router>
        <div className="wrapper d-flex align-items-stretch">
          <SideMenu active={this.state.sidemenuActive} />

          <div className="p-4 p-md-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">

                <SideMenuToggleButton togglebuttonid="sidebarcollapse" onClick={this.toggleSidemenu}></SideMenuToggleButton>
                <HeaderNav />
              </div>
            </nav>
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
        </div>
      </Router>
    );
  }
}

export default App;
