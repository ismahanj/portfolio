import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "./Footer.css"

const Footer = () => {
    return(
        <div id="contact">
            <h1 className="lable">Contact Me</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="de-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:ismahanjamea@gmail.com" target="blank" rel="noopener noreferrer">
                            <Button variant="outline-info" title="ismahanjamea@gmail.com">
                                <i className="fas fa-envelope-square"></i> Email
                            </Button>
                            </a>
                        {/* </div>
                         <div className="m-2"> */}
                            <a href="https://www.linkedin.com/in/ismahan-jamea-4114691b8/" target="blank" rel="noopener noreferrer">
                            <Button variant="outline-info" title="Linkedin">
                            <i className="fab fa-linkedin"></i> Linkedin

                            </Button>
                            </a>
                         {/* </div>
                        <div className="m-2"> */}
                            <a href="https://github.com/ismahanj" target="blank" rel="noopener noreferrer">
                            <Button variant="outline-info" title="GitHub">
                            <i className="fab fa-github-square"></i> GitHub

                            </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>

    )
}

export default Footer; 