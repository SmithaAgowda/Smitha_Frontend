import React from 'react'
import Image from 'react-bootstrap/esm/Image'
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



const Section = () => {
  return (
    <>
        <section className='wrapper pt-4'>
          <div class="badge bg-primary-light">Portfolio</div>
          <h3>Check Our <span>Portfolio</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi aperiam nam voluptatum error, beatae rationeperiam nam voluptatum error, beatae rsvs Voluptatem .
            </p>
          
        <Container>

          <Row>
                   <div>
                        <button class="btn filter-button" data-filter="all">ALL</button>
                        <button class="btn filter-button" data-filter="app">APP</button>
                        <button class="btn filter-button" data-filter="cards">CARD</button>
                        <button class="btn filter-button" data-filter="web">WEB</button>
                    </div>
                    <br/>
                    
            <Col className='col-md-3'> <Image src={img1} /></Col>
          
            
            <Col className='col-md-3'> <Image src={img2}  /></Col>
          
           
            <Col className='col-md-3'> <Image src={img3}  /></Col>
 
       
            <Col className='col-md-3'> <Image src={img4}  /></Col>
         
          
          </Row>

        </Container>
           


        </section>
    </>
 
  )
}

export default Section