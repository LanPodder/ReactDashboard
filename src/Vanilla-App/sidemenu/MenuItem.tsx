import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps{
    linkto: string,
    itemname: string
}

class MenuItem extends React.Component<MenuItemProps> {
    render() {
        return (
            <li>
                <Link to={this.props.linkto}>{this.props.itemname}</Link>
            </li>
        );
    }
}

export default MenuItem;