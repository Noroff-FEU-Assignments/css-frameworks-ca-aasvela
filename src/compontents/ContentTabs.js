import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContentTabs() {
  return (
    <Tabs defaultActiveKey="home">
      <Tab eventKey="home" title="Home">
        <Row>
          <Col>
            <img src="images/tab/tab-1.jpg"></img>
          </Col>
          <Col>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.
            </p>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>blblblbl</p>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p>blblblbl</p>
      </Tab>
    </Tabs>
  );
}

export default ContentTabs;
