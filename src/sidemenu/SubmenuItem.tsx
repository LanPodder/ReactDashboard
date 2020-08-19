import React from 'react';
import { Collapse } from 'react-bootstrap';

import './SubmenuItem.css';

interface SubMenuProps {
    submenuid: string,
    submenuname: string
}

interface SubMenuState{
    show: boolean,
}

class SubmenuItem extends React.Component<SubMenuProps, SubMenuState> {
    constructor(props: SubMenuProps){
        super(props);
        this.state = {
            show: false,
        };
        this.toggleSubMenu = this.toggleSubMenu.bind(this);
    }
    render() {
        return (
            <div>
                <button className="dropdown-toggle" onClick={this.toggleSubMenu}>{this.props.submenuname}</button>
                <ul className="submenu list-unstyled" id={this.props.submenuid}>
                    <Collapse in={this.state.show}>
                        <div>{this.props.children}</div>
                    </Collapse>
                </ul>
            </div>
        );
    }

    toggleSubMenu(): void{
        this.setState({show: !this.state.show});
    }
}

export default SubmenuItem;