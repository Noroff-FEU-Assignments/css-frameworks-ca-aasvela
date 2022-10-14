import React from 'react';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container';
import ContentFooter from './ContentFooter';
import ImageCard from './ImageCard';

function News() {
  return (
    <div className="wrapper">
      
      <Row>
        <Col md="1">
        </Col>
        <Col md="10">
        <h2>News</h2>
        <Container className="home-container"></Container>
      <ImageCard />
      <ContentFooter />
        </Col>
        <Col md="1">
        </Col>
      </Row>

    </div>
  );
}

export default News;
