import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class Footer extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        
        return (

            <footer className="mt-5">
                <Container fluid>
                    <Row className="border-top justify-content-between p-3">
                        <Col className="p-0" md={3} sm={12}>
                            aaron goh
                        </Col>
                        <Col className="p-0 d-flex justify-content-end" md={3}>
                            This site was made by aaron goh
                        </Col>
                    </Row>
                </Container>
            </footer>

        );

    }

}

export default Footer;