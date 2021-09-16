import { Container, Row, Col, Button } from 'react-bootstrap';

export default function CallFunc() {
  function handleFuncWithOutParam() {
    alert('Call Function without params');
  }

  function handleFuncWithParam(name) {
    alert(`Hello ${name}`);
  }
  return (
    <Container>
      <Row>
        <Col md="3">
          <Button onClick={handleFuncWithOutParam}>Call Function without params</Button>
        </Col>
        <Col md="3">
          <Button
            onClick={() => handleFuncWithParam('Duy Pham')}
            variant="success"
          >
            Call Function with params
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
