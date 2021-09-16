import { useState } from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';

export default function StateFunc() {
  const [count, setCount] = useState(10)

  function handleDown() {
    if (count === 1) {
      return;
    }

    setCount(count - 1);
  }

  return (
    <Container>
      <Row>
        <Col md="3" className="mb-4">
          <Button onClick={() => setCount(count + 1)}>Increase</Button>
        </Col>
        <Col md="3" className="mb-4">
          <Button onClick={handleDown}>Down</Button>
        </Col>
      </Row>
      <Row>
        <ProgressBar striped variant="success" now={count} label={`${count}%`} />
      </Row>
    </Container>
  );
};
