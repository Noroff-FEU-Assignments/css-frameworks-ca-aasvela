import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContentFooter from './ContentFooter';
import ContentJumbo from './ContentJumbo';
import ContentTabs from './ContentTabs';

function Home() {
  return (
    <div className="wrapper">
      <Row>
        <Col>
          <ContentJumbo />
        </Col>
      </Row>
      <Row>
        <Col xs="1"></Col>
        <Col xs="10">
          <Container className="home-container">
            <h2>We do YAY things</h2>
            <p>
              Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper
              mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris
              eleifend finibus et ac orci. Aliquam metus massa, aliquam quis
              arcu sit amet, consectetur faucibus urna. Suspendisse massa diam,
              efficitur eu massa euismod, pretium lacinia magna. Donec mi orci,
              sollicitudin in luctus a, varius eget massa.
            </p>
          </Container>
          <Container>
            <ContentTabs />
          </Container>
        </Col>
        <Col xs="1"></Col>
      </Row>
      <ContentFooter />
    </div>
  );
}

export default Home;
