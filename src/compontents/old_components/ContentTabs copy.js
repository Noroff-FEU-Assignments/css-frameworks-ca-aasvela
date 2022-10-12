import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function ContentTabs() {
  return (
    <Container>
      <Tabs defaultActiveKey="home">
        <Tab eventKey="home" title="Home">
          <Container>
            <Row className="tab-row">
              <Col className="tab-col">
                <img className="tab-img" src="images/tab/tab-1.jpg"></img>
              </Col>
              <Col className="tab-col">
                <div className="tabs-container">
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Tab>

        <Tab eventKey="profile" title="Profile">
          <p>blblblbl</p>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <p>blblblbl</p>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default ContentTabs;
