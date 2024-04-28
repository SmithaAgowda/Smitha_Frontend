import React from 'react'
import about from '../assets/image/about.webp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Footer from '../Components/Footer';

const About = () => {
  return (

    <>
    
    <section className='about-main'>
      <Container className='about'>
          <Row>
              <Col className='col-md-5'>
                <Image src={about} height={800} />
              </Col>
              <Col className='col-md-1'></Col>
              <Col className='col-md-5 about-left'>
                  <h1 className='pt-3'>ABOUT JADE</h1>
                  <p  className='pt-3'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
                  <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p>
                  <h3>Education:</h3>
                  <p className='pt-3'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                  <h3 className='pt-3'>Awards & Nominations:</h3>
                  <p  className='pt-3'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
              </Col>
              <Col className='col-md-1'></Col>
          </Row>
      </Container>
    </section>
    <Footer/>

    </>
    
  )
}

export default About