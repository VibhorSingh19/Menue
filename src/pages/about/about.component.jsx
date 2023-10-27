import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/logo.webp'
import './about.style.css'
import Button from 'react-bootstrap/Button'
const About = () => {
  return (
    <div id='about'>
      <h1 className="pt-3 text-center font-details pb-3">About us</h1>
      <Container>
         <Row className="pt-3 pb-5 align-items-center">
            {/*Profile Pic*/}
            <Col xs={12} md={6}>
             <Row className="justify-content-center mb-2 mr-2">
              <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
             </Row>
            </Col>
            {/*About me*/}
            <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                 Hi there!<strong>&nbsp;</strong>
                <br />Welcome to SUNITI's, where coffee isn't just a beverage; it's an experience. Nestled in the heart of Dehradun, our cafe is a haven for coffee enthusiasts, foodies, and anyone seeking a warm and inviting atmosphere to relax and recharge.
                <br />
                <br />
                </Row>
                <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                 
                </Col>
                </Row>
            </Col>
         </Row>
      </Container>
    </div>
  );
}

export default About;
