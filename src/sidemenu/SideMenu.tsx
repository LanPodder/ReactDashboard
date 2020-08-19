import React from 'react';
import './SideMenu.css';
import MenuItem from './MenuItem';
import SubmenuItem from './SubmenuItem';
import { Collapse } from 'react-bootstrap';


interface SideMenuProps {
    active: boolean,
}

class SideMenu extends React.Component<SideMenuProps> {

    render() {
        return (
            <nav id="sidemenu" className={this.props.active ? '' : 'active'}>
                <div className="p-4 pt-5">
                    <ul className="components list-unstyled mb-5">
                        <MenuItem linkto="/" itemname="Home" />
                        <MenuItem linkto="/dashboard" itemname="Dashboard" />
                        <SubmenuItem submenuid="complexdashboardsubmenu" submenuname="ComplexDashboard">
                            <MenuItem linkto="/" itemname="Complex Dashboard 1" />
                            <MenuItem linkto="/" itemname="Complex Dashboard 2" />
                            <MenuItem linkto="/" itemname="Complex Dashboard 3" />
                        </SubmenuItem>
                        <MenuItem linkto="/users" itemname="About" />
                    </ul>
                </div>
            </nav>
        );
    }
}

export default SideMenu;