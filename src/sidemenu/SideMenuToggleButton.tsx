import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './SideMenuToggleButton.css';

interface SideMenuToggleButtonProps{
    togglebuttonid: string,
    onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
}

class SideMenuToggleButton extends React.Component<SideMenuToggleButtonProps> {
    render() {
        return (
            <button type="button" id="sidemenucollapse" className="btn btn-outline-primary" onClick={this.props.onClick}>
                <FontAwesomeIcon icon={faBars} />
                <span className="sr-only">Toggle Menu</span>
            </button>
        );
    }
}

export default SideMenuToggleButton;