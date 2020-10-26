import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import './App.css';
import Aos from 'aos';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            <Router>
                <Container className="p-0" fluid>
                    <Navbar className="navbar-background" fixed="top" variant="dark" expand="lg">
                        <Navbar.Brand href="#info">aaron goh</Navbar.Brand>

                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                        <Navbar.Collapse>
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/experience">Experience</Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>

                    <Hero/>

                    <Footer/>

                </Container>
            </Router>

        );
    }
}

export default App;
