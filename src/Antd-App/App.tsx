import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import Header from './header/Header';
import Sider from './sider/Sider';
import Index from './index/Index';
import Dashboard from './dashboard/Dashboard';

class App extends React.Component {
    private routes = [{
        path: '',
        breadcrumbName: 'home'
    }, {
        path: 'first',
        breadcrumbName: 'first'
    }, {
        path: 'second',
        breadcrumbName: 'second'
    }];

    itemRender(route: any, params: any, routes: any, paths: string[]) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
    }

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: "100vh" }}>
                    <Header></Header>
                    <Layout>
                        <Sider></Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }} itemRender={this.itemRender} routes={this.routes}>
                            </Breadcrumb>
                            <Layout.Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Switch>
                                    <Route path="/" exact>
                                        <Index />
                                    </Route>
                                    <Route path="/dashboard" exact>
                                        <Dashboard />
                                    </Route>
                                </Switch>
                            </Layout.Content>
                        </Layout>
                    </Layout>
                </Layout >
            </Router>
        );
    }
}
export default App;