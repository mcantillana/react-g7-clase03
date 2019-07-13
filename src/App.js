import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import Home from './views/Home';
import Contact from './views/Contact';
import store from './store/store';

const {Provider} = store;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Chanchito Feliz',
            data : {
                age: 'asd',
                race: 'asd',
                color: 'asd',
            }
        }
    }


    render() {
        return (
            <Provider value={this.state}>
            
              <BrowserRouter>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/contact" component={Contact} />
                  </Switch>
              </BrowserRouter>
            </Provider>
        );
    }
}


export default App;
