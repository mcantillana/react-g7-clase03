import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome';

class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="my-header">soy un header</h1>
                <Welcome  name="this.props.name"/>
            </div>
        );
    }
}

export default Header;