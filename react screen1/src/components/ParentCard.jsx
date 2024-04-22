import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';

const ParentCard = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <Cards name='Walter White' designation="Chief Executive Officer" image={img1}/>
                </Col>
                <Col>
                    <Cards name='Sarah Jhonson' designation="Product Manager" image={img2}/>
                </Col>
                <Col>
                    <Cards name='William Anderson' designation="CEO" image={img3}/>
                </Col>
                <Col>
                    <Cards name='Amanda Jepson' designation="Accountant" image={img4}/>
                </Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default ParentCard