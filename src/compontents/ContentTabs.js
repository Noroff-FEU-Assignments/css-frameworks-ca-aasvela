import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Twitter } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';

function ContentTabs() {
  return (
    <Container className="mb-3">
      <Tabs defaultActiveKey="home">
        <Tab eventKey="home" title="First">
          <Container className="tab-inner-container">
            <Row className="tab-row">
              <Col className="tab-col">
                <img className="tab-img" src="images/tab/tab-1.jpg"></img>
              </Col>
              <Col md="8" className="tab-col">
                <div className="tabs-container">
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                </div>
                <div className="tabs-container">
                  <p>SHARE</p>
                  <div className="icon-container-icons icon-container-twitter">
                    <Twitter
                      className="icon icon-twitter"
                      width="2em"
                      height="2em"
                      fill="currentColor"
                    />
                  </div>
                  <div className="icon-container-icons icon-container-facebook">
                    <Facebook
                      className="icon icon-facebook"
                      width="2em"
                      height="2em"
                      fill="currentColor"
                      p-d
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Tab>

        <Tab eventKey="profile" title="Second">
          <p>blblblbl</p>
        </Tab>
        <Tab eventKey="contact" title="Third">
          <p>blblblbl</p>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default ContentTabs;
