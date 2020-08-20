import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Layout.Header className="header">
                <div className="logo" /> {/**Adjust logo via css */}
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{float: 'right'}}>
                    <Menu.Item key="1"><Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}>Profile</Link></Menu.Item>
                    <Menu.Item key="2">Help</Menu.Item>
                    <Menu.Item key="3">Settings</Menu.Item>
                    <Menu.Item key="4">Login/Logout</Menu.Item>
                </Menu>
            </Layout.Header>
        );
    }
}

export default Header;