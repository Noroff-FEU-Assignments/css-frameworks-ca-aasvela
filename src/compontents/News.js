import React from 'react';
import Container from 'react-bootstrap/Container';
import ContentFooter from './ContentFooter';
import ImageCard from './ImageCard';

function News() {
  return (
    <div className="wrapper">
      <h2>News</h2>
      <Container className="home-container"></Container>
      <ImageCard />
      <ContentFooter />
    </div>
  );
}

export default News;
