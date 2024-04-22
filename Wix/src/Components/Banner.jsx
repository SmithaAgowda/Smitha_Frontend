import React from 'react';
import banners from '../assets/image/banner.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Banner = () => {
  return (
    <Container>
        <Row>
            <Col className='banner'>
            <Image src={banners} />
            <h2>THE ART OF FOOD</h2>
            <h5>PHOTOGRAPHY</h5>
            <Button variant="outline-light" className='btn-adj'>VIEW MORE</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Banner