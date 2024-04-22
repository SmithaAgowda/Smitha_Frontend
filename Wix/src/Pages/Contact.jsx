import React from 'react'
import contact from '../assets/image/conatct.webp';
import {Form,FloatingLabel,Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Footer from '../Components/Footer';
import "./ContactPage.css"

const Contact = () => {
  return (
    <>
    <section className='contact-main'>
      <Container className='contact'>
          <Row>
              <Col className='col-md-4 img'>
                <Image src={contact} width={550} height={1000} />
              </Col>
              <Col className='col-md-3'></Col>
              <Col className='col-md-4 contact-left'>
                 <h2 className='conatct-title' id="main-header">GET IN TOUCH</h2>
                 <p className='contact-para'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                 <p>Tel: 123-456-7890  |  Email: info@mysite.com</p>
                  <Container>
                 <Form.Group md="4" controlId="validationCustom01">
                <Form.Label className="d-flex fs">
                  First name *
                </Form.Label>
                <Form.Control required type="text" id="inp" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom02">
                <Form.Label className="d-flex mt-4">
                  Last name *
                </Form.Label>
                <Form.Control required type="text" id="inp" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label className="d-flex mt-3">
                  Email *
                </Form.Label>
                <Form.Control required type="text" id="inp" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom02">
                <Form.Label className="d-flex mt-3">
                  Subject *
                </Form.Label>
                <Form.Control required type="text" id="inp" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Label className="d-flex mt-3">
                Message *
              </Form.Label>
              <FloatingLabel controlId="floatingTextarea" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  id="inp"
                />
              </FloatingLabel>
              <Button id="button-mit" variant="dark" className="col-3">
                Submit
              </Button>
              <p className="mt-3">Stay Up-To-Date with New Posts</p>
            </Container>
            <Container className="col-9 mt-5 col-12">
              <Form.Group
                md="4"
                className="d-flex"
                controlId="validationCustom02"
              >
                <Col lg={6}>
                  <Form.Label className="d-flex">
                    Email <sup>*</sup>
                  </Form.Label>
                  <Form.Control required type="text" id="inp" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
                <Col lg={4}>
                  <Button id="sub-now" variant="dark" className="col-10 mt-4">
                    Subscribe Now
                  </Button>
                </Col>
              </Form.Group>
             </Container>
              </Col>
              <Col className='col-md-1' ></Col>
          </Row>
      </Container>
    </section>
    <Footer/>
    </>
  )
}

export default Contact