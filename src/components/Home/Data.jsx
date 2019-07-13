import React, { Component } from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import store from '../../store/store';

const {Consumer} = store;


class Data extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Consumer>
                                {
                                    value => Object.keys(value.data).map(
                                        index => <li key={index}>{index}: {value.data[index]}</li>
                                    )
                             
                                }
                            </Consumer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Data;