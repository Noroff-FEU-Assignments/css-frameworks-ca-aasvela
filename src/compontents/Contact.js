import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentFooter from './ContentFooter';
import MyForm from './MyForm';

function Contact() {
  return (
    <>
      <div className="wrapper">
        {/* <ContentNavBar /> */}

        <Row>
          <Col md="1"></Col>
          <Col md="10">
            <Container className="home-container">
              <h2>Submit your details</h2>
              <Container className="contact-container">
                <Row>
                  <Col md="6">
                    <MyForm />
                  </Col>
                  <Col md="6">
                    <Container className="contact-text-container">
                      <div>
                        <p>hello@yay.com</p>
                        <p>123 456 7890</p>
                        <p>
                          123 Some Street
                          <br></br>
                          Somewhere
                          <br></br>
                          Some City
                          <br></br>
                          10000
                        </p>
                      </div>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
          <Col md="1"></Col>
        </Row>
      </div>

      <ContentFooter />
    </>
  );
}

export default Contact;
