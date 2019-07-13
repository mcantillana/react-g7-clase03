import React, { Component } from 'react';

import Header from '../components/common/Header/Header';
import Data from '../components/Home/Data';


class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Data />

            </div>
        );
    }
}

export default Home;
