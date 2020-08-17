import React from 'react';
import './SideMenu.css';
import MenuItem from './MenuItem';
import SubmenuItem from './SubmenuItem';

interface SideMenuState{
    active: boolean,
}

interface SideMenuProps{

}

class SideMenu extends React.Component<SideMenuProps, SideMenuState> {
    constructor(props: SideMenuProps) {
        super(props);
        this.state = { 
            active: false,
        };
    }
    render() {
        return (
            <nav id="sidemenu" className={this.state.active ? 'active':''}>
                
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

    toggleActive(){
        this.setState((currentState) => ({
            active: !currentState.active,
        }))
    }
}

export default SideMenu;