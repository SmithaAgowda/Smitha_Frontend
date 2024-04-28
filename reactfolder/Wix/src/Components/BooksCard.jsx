import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Image from 'react-bootstrap/esm/Image'

const BooksCard = (props) => {
  return (
    <>
    
        <Container>

            <Row>

                <Col className='col-md-1'></Col>
                <Col className='col-md-5'>
                    <Row>
                        <Col className='col-md-12'>
                            <h2 className='book-title'>{props.title}</h2>
                        </Col>
                        <Col className='col-md-12'>
                        <p className='book-para'>{props.para}</p>
                        </Col>
                        <Col className='col-md-6'>
                            <h1 className='book-price'>{props.price}<sup>$</sup></h1>
                        </Col>
                        <Col className='col-md-6'>
                            <Button variant="outline-dark" className='btn-book float-right'>BUY NOW</Button>
                        </Col>
                    </Row>
                   
                </Col>
                <Col className='col-md-5'>
                    <Image src={props.image} />
                </Col>
                <Col className='col-md-1'></Col>

            </Row>

        </Container>
    
    </>
  )
}

export default BooksCard