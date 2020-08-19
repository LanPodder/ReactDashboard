import React from 'react';
import { Button } from 'react-bootstrap/esm';
import axios from 'axios';

interface IndexProps {

}

interface IndexState {
    name: string
}

class Index extends React.Component<IndexProps, IndexState> {
    

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
        }
    }

    render() {
        return (
            <div>
                <h2 className="mb-4">Index</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button onClick={this.handleClick}>Press me for something cool to happen</Button>
                {}
            </div>
        );
    }

    handleClick() {
        const user = {
            name: 'hello'
        };
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
}

export default Index;