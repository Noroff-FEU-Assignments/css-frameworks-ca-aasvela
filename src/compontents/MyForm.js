import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function MyForm() {
  return (
    <Container className="contact-form-container shadow p-3 mb-5 rounded">
      <Form.Label>Name</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <Form.Label>Email</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <Form.Label>Website</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">https://</InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Allow us to sell your personal details to whomever we want"
        />
      </Form.Group>
      <Button className="form-btn" variant="secondary" type="submit">
        Submit
      </Button>
    </Container>
  );
}

export default MyForm;
