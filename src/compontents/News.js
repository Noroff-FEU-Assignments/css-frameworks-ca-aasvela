import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ContentFooter from './ContentFooter';
import ImageCard from './ImageCard';

function News() {
  return (
    <>
      <div className="wrapper">
        <Row>
          <Col md="1"></Col>
          <Col md="10">
            <Container className="home-container">
              <h2>News</h2>
              <ImageCard />
            </Container>
          </Col>
          <Col md="1"></Col>
        </Row>
      </div>
      <div>
        <ContentFooter />
      </div>
    </>
  );
}

export default News;
