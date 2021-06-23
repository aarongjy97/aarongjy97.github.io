import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';
import { ReactComponent as UIImage } from '../../images/ui.svg';
import { ReactComponent as SWEImage } from '../../images/web.svg';
import { ReactComponent as FTImage } from '../../images/fintech.svg';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (

            <section id="about">

                <Container fluid className="about-container d-flex flex-column">

                    <Row className="d-flex mt-4 pt-5 justify-content-center align-items-center">
                        <div className="about-me text-center">
                            <p className="font-weight-bold">About Me</p>
                        </div>
                    </Row>

                    <Row className="d-flex mt-4 justify-content-around">

                        <Col xs={3} sm={3} md={3} className="d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex justify-content-center align-items-center svg-circle-container">
                                <UIImage />
                            </div>
                        </Col>

                        <Col xs={3} sm={3} md={3} className="d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex justify-content-center align-items-center svg-circle-container">
                                <SWEImage />
                            </div>
                        </Col>

                        <Col xs={3} sm={3} md={3} className="d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex justify-content-center align-items-center svg-circle-container">
                                <FTImage />
                            </div>
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <div className="text-center mt-3">
                                <p className="font-weight-bold">User Centric UI</p>
                            </div>
                        </Col>

                        <Col>
                            <div className="text-center mt-3">
                                <p className="font-weight-bold">Full Stack Software Engineering</p>
                            </div>
                        </Col>

                        <Col>
                            <div className="text-center mt-3">
                                <p className="font-weight-bold">Financial Technology</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="d-flex mt-4 justify-content-center">

                        <div className="d-flex flex-column justify-content-around px-5">

                            <div className="hobbies text-center">
                                <p className="font-weight-bold">ex-Sprint Canoeist, PC Hardware Enthusiast &amp; Aspiring Software Engineer</p>
                            </div>

                            <div className="text-center">

                                <div className="d-flex justify-content-center mt-2">
                                    <ul className="d-flex flex-column justify-content-center description">
                                        <li>
                                            <p>
                                                Currently a Final Year Information Systems Undergraduate in National University of Singapore,
                                                specialising in full-stack software engineering.
                                            </p>
                                        </li>

                                        <li>
                                            <p>
                                                Currently looking for a full-time role in Software Engineering starting from <b>May 2022</b>.
                                            </p>
                                        </li>

                                        <li>
                                            <p>
                                                Passionate about <b>IoT</b>, its implementations and how much transformation it can bring to our world.
                                            </p>
                                        </li>

                                        <li>
                                            <p>
                                                Heavily invested in the <b>Financial Technology</b> domain; sharpening my skills in <b>financial analytics and blockchain development</b>.
                                            </p>
                                        </li>

                                        <li>
                                            <p>
                                                Hungry and eager to be part of the Smart Nation initiative to elevate Singapore's technology integration and capabilities.
                                            </p>
                                        </li>

                                        <li>
                                            <p>
                                                Heavily invested in learning and developing powerful, user-centric user interfaces to enable features of the future.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>

                        </div>

                    </Row>

                    <Row className="d-flex mt-3 justify-content-center">

                        <Button target={'_blank'} href={'./aarongohcv.pdf'} className="d-flex resume-button flex-row align-items-center" variant="danger">
                            <FontAwesomeIcon className="mr-2" icon={faDownload} />
                            Resume
                        </Button>

                    </Row>

                </Container>

            </section>

        );

    }
}

export default About;