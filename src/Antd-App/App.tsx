import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Header from './header/Header';
import Sider from './sider/Sider';
import Index from './index/Index';
import Dashboard from './dashboard/Dashboard';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout style={{ minHeight: "100vh" }}>
                    <Header></Header>
                    <Layout>
                        <Sider></Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
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