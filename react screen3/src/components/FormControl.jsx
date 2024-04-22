import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";

const FormControl = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-md-3"> </Col>
          <Col className="col-md-6 box">
            <Form>
              <Row>
                <Col className="col-md-6">

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Phone number" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Email" />
                  </Form.Group>


                </Col>

                <Col className="col-md-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={9} />
                </Form.Group>
                </Col>


                <Col className="col-md-12">
                    <Button variant="primary btn-adj">Getting Started</Button>
                </Col>


              </Row>
            </Form>
          </Col>
          <Col className="col-md-3"> </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormControl;
