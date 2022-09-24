import Nav from 'react-bootstrap/Nav';

function ContentTabs() {
  return (
    <div className="container">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">First</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Second</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Third</Nav.Link>
        </Nav.Item>
      </Nav>
      <img src="images/tab/tab-1.jpg"></img>
    </div>
  );
}

export default ContentTabs;
