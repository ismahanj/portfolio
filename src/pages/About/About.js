import React from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Pic from "../../assets/pic.jpg"
import "./About.css"


function About(){
    return(
        <div id="about">
        <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
            <Row className="pt-3 pb-5 align-items-center">
                <Col xs={12} md={6}>
                    <Row className="justify-content-center mb-2 mr-2 ">
                    <Image className="pic justify-content-end" alt="portfolio pic" src={Pic} roundedCircle />
                    </Row>
                    </Col>
            <Col xs={12} md={6}>
            <Row className="align-items-start p-2 my-bio rounded">
            Hello! I am  <strong>&nbsp; Ismahan Jamea </strong> <br/> I am a Full Stack Web Developer living in Seattle, Washington. I enjoy exploring the beautiful Washington outdoors with family and friends. Recently, I began acrylic painting. I take inspiration from tutorials I see online and have produced a few pieces so far. I also enjoy creating henna art for myself and family. Henna tattoo is an ancient form of temporary skin tattooing practiced in many parts of the world.
            <br/> In 2020, I successfully completed the University of Washington Coding Boot Camp where I learned various languages and programs to help me be successful in my career and kindled my passion to be a life-long learner of new technologies. Working as Full Stack Web Developer, I am driven to provide excellent experiences to clients and exceed expectations. 
            </Row>
            <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                <div>
                    <a href="#contact">
                    <Button className="m-2" variant="outline-info">Let's Connect </Button>
                    </a>
                </div>
                <div>
                    <a href="https://docs.google.com/document/d/1AQ32JAXPH120qLKNjFxeTmoAeYDDdMoXo3rXMNaTBnY/edit" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/ismahanj" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/ismahan-jamea-4114691b8/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
            </Row>
            </Col>
            </Row>
        </Container>
        </div>
        </div>
    )
}

export default About; 