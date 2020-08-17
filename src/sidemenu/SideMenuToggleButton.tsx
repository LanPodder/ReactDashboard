import React, { useState } from 'react';

interface SideMenuToggleButtonProps{
    togglebuttonid: string,
}

class SideMenuToggleButton extends React.Component<SideMenuToggleButtonProps> {
    render() {
        return (
            <button type="button" id="sidebarcollapse" className="btn btn-primary">
                <i className="fa fa-bars"></i>
                <span className="sr-only">Toggle Menu</span>
            </button>
        );
    }
}

export default SideMenuToggleButton;