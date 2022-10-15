import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Vimeo } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';

function ContentFooter() {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col md="1"></Col>
          <Col md="10">
            <Row>
              <Col>
                <Container>
                  <div className="icon-container">
                    <div className="icon-container-icons icon-container-vimeo">
                      <Vimeo className="icon icon-vimeo" />
                    </div>
                    <div className="icon-container-icons icon-container-youtube">
                      <Youtube className="icon icon-youtube" />
                    </div>
                  </div>
                </Container>
              </Col>
              <Col>
                <Container className="footer-container">
                  <p>hello@yay.com</p>
                </Container>
              </Col>
              <Col>
                <p>Copyright 2020</p>
              </Col>
            </Row>
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default ContentFooter;
