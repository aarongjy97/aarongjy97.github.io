import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Hero extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        Aos.init({});
    }

    render() {

        const particlesParams = {
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "polygon": {
                        "polygon.nb_sides": 5,
                    },
                    "image": {
                        "type": "circle"
                    }
                },
                "line_linked": {
                    "enable": false,
                },
                "move": {
                    "direction": "none",
                    "speed": 1,
                    "random": true,
                },
                "size": {
                    "value": 3
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.05
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    }
                },
                "modes": {
                    "line_linked": {
                        "distance": 400
                    },
                    "bubble": {
                        "distance": 250,
                        "size": 0,
                        "opacity": 0,
                        "duration": 2
                    },
                    "repulse": {
                        "distance": 400
                    }

                }
            },
            "retina_detect": true
        }

        return (

            <section id="info">

                <Container fluid className="info-container text-center align-items-center">

                    <div className="particles-background">
                        <Particles params={particlesParams} height="100vh" />
                    </div>
                    <Container fluid className="info-card d-flex align-items-center justify-content-center flex-column">
                        <h1 className="flipInX">aaron goh</h1>
                        <p className="lead">Penultimate Year NUS Information Systems Undergraduate</p>
                        <Typed
                            strings={['Software Engineer', 'Frontend Engineer', 'Internet of Things Enthusiast']}
                            typeSpeed={40}
                            backSpeed={30}
                            loop={true}
                        >
                        </Typed>
                    </Container>

                </Container>

            </section>

        );
    }
}

export default Hero;