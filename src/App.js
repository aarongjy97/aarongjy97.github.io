import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import './App.css';

import { Link } from 'react-scroll';

import Aos from 'aos';
import 'aos/dist/aos.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        Aos.init({});
    }

    render() {
        return (

            <Router>
                <Container className="p-0" fluid>
                    <Navbar collapseOnSelect className="navbar-background" fixed="top" variant="dark" expand="lg">
                        <Navbar.Brand>
                            <Link to="info" smooth={true} duration={500}>aaron goh</Link>
                        </Navbar.Brand>

                        <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse>
                            <Nav className="ml-auto">
                                <Nav.Link active={false} eventKey="1" as={Link} activeClass="active" to="info" className="nav-link" spy={true} smooth={true} duration={100}>
                                    Home
                                </Nav.Link>
                                <Nav.Link active={false} eventKey="2" as={Link} activeClass="active" to="about" className="nav-link" spy={true} smooth={true} duration={100}>
                                    About
                                </Nav.Link>
                                <Nav.Link active={false} eventKey="3" as={Link} activeClass="active" to="skills" className="nav-link" spy={true} smooth={true} duration={100}>
                                    Skills
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Hero/>
                    <About/>
                    <Skills/>
                    <Footer/>

                </Container>
            </Router>

        );
    }
}

export default App;
