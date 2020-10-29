import React from 'react';
import './Skills.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import ReactVisibilitySensor from 'react-visibility-sensor';

class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            data: [
                { x: 'Java EE'   , y: 0, z: 90 },
                { x: 'Java'      , y: 0, z: 90 },
                { x: 'Angular'   , y: 0, z: 90 },
                { x: 'TypeScript', y: 0, z: 80 },
                { x: 'React'     , y: 0, z: 80 },
                { x: 'JavaScript', y: 0, z: 80 },
                { x: 'HTML, CSS' , y: 0, z: 70 },
                { x: 'Python'    , y: 0, z: 70 },
                { x: 'pgSQL'     , y: 0, z: 70 },
            ]
        }
    }

    createProgessBars() {

        let progressBars = [];

        this.state.data.forEach( language => {
            progressBars.push(

                <div className="d-flex flex-column mt-3">
                    <p>{ language.x }</p>
                    <ProgressBar now={ language.y }></ProgressBar>
                </div>

            );
        })

        return progressBars;
    }

    onVisible(visible) {
        console.log('element is ', visible);

        if (visible) {

            this.setState({ 
                data: [
                    { x: 'Java EE'   , y: 90, z: 90 },
                    { x: 'Java'      , y: 90, z: 90 },
                    { x: 'Angular'   , y: 90, z: 90 },
                    { x: 'TypeScript', y: 80, z: 80 },
                    { x: 'React'     , y: 80, z: 80 },
                    { x: 'JavaScript', y: 80, z: 80 },
                    { x: 'HTML, CSS' , y: 70, z: 70 },
                    { x: 'Python'    , y: 70, z: 70 },
                    { x: 'pgSQL'     , y: 70, z: 70 },
                ]
            })

        }
    }

    render() {

       
        return (

            <section id="skills">
                <Container fluid className="skills-container d-flex flex-column">
                    
                    <Row className="d-flex mt-4 pt-5 justify-content-center align-items-center">
                        <div className="about-me text-center">
                            <p className="font-weight-bold">Skills</p>
                        </div>
                    </Row>

                    <Row className="d-flex justify-content-center flex-column px-5">
                        <p className="align-self-center">Programming {this.state.isVisible}</p>

                        <ReactVisibilitySensor scrollCheck={true} 
                            partialVisibility={true}
                            minTopValue={200}
                            onChange={ (isVisible) => this.onVisible(isVisible) }>
                            <div className="d-flex justify-content-center flex-column">
                                { this.createProgessBars() }
                            </div>
                        </ReactVisibilitySensor>

                    </Row>

                </Container>
            </section>

        );
    }
}

export default Skills;