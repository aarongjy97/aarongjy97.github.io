import React from 'react';
import './Footer.css';
import '../../fontello/css/fontello.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-scroll';

class Footer extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (

            <footer className="footer">

                <Container fluid className="d-flex flex-column position-relative h-100">

                    <Row className="icon-row position-absolute w-100 justify-content-center">

                        <Link className="back-to-top d-flex justify-content-center align-items-center" to="info" smooth={true} duration={500}>
                            <i className="icon-up-open"></i>
                        </Link>
                    </Row>

                    <Row className="justify-content-center align-items-center h-100">

                        <Col className="d-flex flex-column justify-content-between h-25" md={{ span: 4 }}>

                            <div className="d-flex justify-content-around w-100">
                                <a className="social-media-icons" href="http://github.com/aarongjy97">
                                    <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
                                </a>

                                <a className="social-media-icons" href="http://linkedin.com/in/aarongoh97">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                </a>

                                <a className="social-media-icons" href="http://instagram.com/aarongohh">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </div>

                            <div className="text-center footer-text">
                                &copy; Copyright 2020 Aaron Goh
                            </div>
                           
                        </Col>
                        
                    </Row>

                </Container>
            </footer>

        );

    }

}

export default Footer;