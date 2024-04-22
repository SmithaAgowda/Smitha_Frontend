import React from 'react'
import Footer from '../Components/Footer'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
import img1 from '../assets/image/1.webp'
import img2 from '../assets/image/2.webp'
import img3 from '../assets/image/3.webp'

const Portfolio = () => {
  return (
    <>

      <section className='portfolio'>
        <h2>PORTFOLIO</h2>

        <Container>
          <Row>
            <Col className='col-md-4 edi'>
              <Image src={img1}/>
              <h3>EDITORIAL</h3>
              <Button variant="outline-light" className='btn-adj'>VIEW</Button>
            </Col>
            <Col className='col-md-4 fs'>
              <Image src={img2}/>
              <h3>FOOD & SERVE</h3>
              <Button variant="outline-light" className='btn-adj'>VIEW</Button>
            </Col>
            <Col className='col-md-4 bg'>
              <Image src={img3}/>
              <h3>BAKED GOODS</h3>
              <Button variant="outline-light" className='btn-adj'>VIEW</Button>
            </Col>
          </Row>
        </Container>

      </section>

      <Footer/>

    </>
   

  )
}

export default Portfolio