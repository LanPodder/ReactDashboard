import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Index from './index/Index';
import SideMenu from './sidemenu/SideMenu';
import SideMenuToggleButton from './sidemenu/SideMenuToggleButton';
import HeaderNav from './header-nav/HeaderNav';
import SampleBarChart from './kpi-dashboard/sample-bar-chart/SampleBarChart';

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

          <div className="p-4 container-fluid inner-content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">

                <SideMenuToggleButton togglebuttonid="sidebarcollapse" onClick={this.toggleSidemenu}></SideMenuToggleButton>
                <HeaderNav />
              </div>
            </nav>
            <div className="p-4 p-md-5">
              <Switch>
                <Route path="/about">
                  <div />
                </Route>
                <Route path="/users">
                  <div>Hello users</div>
                </Route>
                <Route path="/" exact component={Index}></Route>
                <Route path="/dashboard" component={SampleBarChart} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
