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
                    <Navbar className="navbar-background" fixed="top" variant="dark" expand="lg">
                        <Navbar.Brand>
                            <Link to="info" smooth={true} duration={500}>aaron goh</Link>
                        </Navbar.Brand>

                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                        <Navbar.Collapse>
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="info" activeClass="active" spy={true} smooth={true} duration={500}>Home</Link>
                                <Link className="nav-link" to="about" activeClass="active" spy={true} smooth={true} duration={500}>About</Link>
                                <Link className="nav-link" to="skills" activeClass="active" spy={true} smooth={true} duration={500}>Skills</Link>
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
