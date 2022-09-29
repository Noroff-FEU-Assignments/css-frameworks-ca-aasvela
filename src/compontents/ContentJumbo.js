import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap';
import Jumbotron from  "bootstrap";

function ContentJumbo() {
  return (
    <Container className='container-fluid'>
      <Row>
        <Col>
          <img fluid src="images/carousel/carousel-1.jpg"></img>
        </Col>
      </Row>
    </Container>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Fluid jumbotron</h1>
      <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
  </div>
  );
}

export default ContentJumbo;
