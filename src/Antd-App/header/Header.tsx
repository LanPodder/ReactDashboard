import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Layout.Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link></Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Layout.Header>
        );
    }
}

export default Header;