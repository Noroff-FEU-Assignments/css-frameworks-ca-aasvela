import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContentNavBar() {
  return (
    <>
      <Row>
        <Col md="1"></Col>
        <Col md="10">
          <Navbar expand="lg">
            <Container className="nav-container">
              <Navbar.Brand as={NavLink} to="/">
                <h1 className="nav-heading">The YAY Company</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" defaultActiveKey="/">
                  <Nav.Link as={NavLink} exact to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="news">
                    News
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="contact">
                    Contact
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className="btn-nav" variant="nav">
                    Go
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col md="1"></Col>
      </Row>
    </>
  );
}

export default ContentNavBar;
