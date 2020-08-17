import React from 'react';

interface SubMenuProps {
    submenuid: string,
    submenuname: string
}

class SubmenuItem extends React.Component<SubMenuProps> {
    render() {
        return (
            <div>
                <a href={`#${this.props.submenuid}`} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">{this.props.submenuname}</a>
                <ul className="collapse list-unstyled" id={this.props.submenuid}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default SubmenuItem;