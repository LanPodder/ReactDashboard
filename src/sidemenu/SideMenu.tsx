import React from 'react';
import './SideMenu.css';
import MenuItem from './MenuItem';
import SubmenuItem from './SubmenuItem';

class SideMenu extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <nav id="sidemenu">
                <div className="p-4 pt-5">
                    <ul className="collapse list-unstyled mb-5">
                        <MenuItem linkto="/" itemname="Home" />
                        <MenuItem linkto="/" itemname="Dashboard" />
                        <SubmenuItem submenuid="complexdashboardsubmenu" submenuname="ComplexDashboard">
                            <MenuItem linkto="/" itemname="Complex Dashboard 1"/>
                            <MenuItem linkto="/" itemname="Complex Dashboard 2"/>
                            <MenuItem linkto="/" itemname="Complex Dashboard 3"/>
                        </SubmenuItem>
                        <MenuItem linkto="/" itemname="About" />
                    </ul>
                </div>
            </nav>
        );
    }
}

export default SideMenu;