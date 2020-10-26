import React from 'react';
import './Stats.css';
import { Container } from 'react-bootstrap';

class Stats extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="stats-container">
                <Container>
                    <h4>This is stats</h4>
                </Container>
            </div>

        );
    }
}

export default Stats;