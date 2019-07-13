import React, { Component } from 'react';
import Header from '../components/common/Header/Header';
import axios from 'axios';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }


    async componentDidMount() {
          // axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
          //   console.log(response.data);
          //   this.setState({
          //       users: response.data
          //   })
          // })
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        await this.setState({
            users: response.data
        })
          
    }
    render() {
        return (
            <div>
                <Header />
                <p className="lol">Soy contacto</p>
                <ul>
                {
                    this.state.users.map((user, index) => <li key={user.name}>{user.name}</li>) 
                }
                </ul>
            </div>
        );
    }
}


export default Contact;