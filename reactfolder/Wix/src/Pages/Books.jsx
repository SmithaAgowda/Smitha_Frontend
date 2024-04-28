import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import BooksCard from '../Components/BooksCard'
import img1 from '../assets/image/b1.webp'
import img2 from '../assets/image/b2.webp'
import img3 from '../assets/image/b3.webp'
import Footer from '../Components/Footer'

const Books = () => {
  return (
    <>
    
      <section className='books'>
        <h2>BOOKS</h2>

        <Container>


          <Row>

            <Col className='books-col col-md-12 books1'>

              <BooksCard  title="BREAKFASTS" image={img1} para="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font." price="40"/>

            </Col>

            <Col className='books-col col-md-12 books2'>
              <BooksCard  title="SUGAR & SPICE" image={img2} para="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font." price="34"/>
            </Col>

            <Col className='books-col col-md-12 books3'>
            <BooksCard  title="HOLIDAY SEASON SPECIALS" image={img3} para="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font." price="25"/>
            </Col> 

          </Row>


        </Container>


      </section>

      <Footer/>
    
    </>
  )
}

export default Books