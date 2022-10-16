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
          <Col xs="1"></Col>
          <Col xs="10">
            <Row className="footer-row">
              <Col>
                <Container>
                  <div className="icon-container">
                    <div className="icon-container-icons icon-container-vimeo">
                      <Vimeo
                        className="icon icon-vimeo"
                        width="2em"
                        height="2em"
                      />
                    </div>
                    <div className="icon-container-icons icon-container-youtube">
                      <Youtube
                        className="icon icon-youtube"
                        width="2em"
                        height="2em"
                      />
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
          <Col xs="1"></Col>
        </Row>
      </Container>
    </footer>
  );
}

export default ContentFooter;
