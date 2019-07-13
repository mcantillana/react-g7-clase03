import React, { Component } from 'react';
import store from '../../../store/store';

const {Consumer} = store;


class Welcome extends Component {
    render() {
        return (
            <div>

                 <p className="my-welcome">bienvenido: </p>
                 <Consumer>
                     {
                        value => <span>{value.name}</span>
                     }
                 </Consumer>
            </div>
        );
    }
}


export default Welcome;