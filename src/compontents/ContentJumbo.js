import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap';

function ContentJumbo() {
  return (
    <Container className='container-fluid'>
      <Row>
        <Col>
          <img fluid src="images/carousel/carousel-1.jpg"></img>
        </Col>
      </Row>
    </Container>
  );
}

export default ContentJumbo;
