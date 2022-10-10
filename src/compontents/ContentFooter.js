import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContentFooter() {
  return (
    <footer>
      <div className="wide-container">
        <Row>
          <Col>1 of 1</Col>
          <Col>hello@yay.com</Col>
          <Col>Copyright 2020</Col>
        </Row>
      </div>
    </footer>
  );
}

export default ContentFooter;
