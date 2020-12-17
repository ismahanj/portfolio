import React from "react"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Pic from "../../assets/pic.jpg"


function About(){
    return(
        <div id="about">
            <h1>about me</h1>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Row>
                    <Image src="holder.js/171x180" roundedCircle />
                    </Row>
                    </Col>

            </Row>
        </Container>
        </div>
    )
}