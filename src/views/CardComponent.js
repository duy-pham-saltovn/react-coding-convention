import PropTypes from 'prop-types';
import { Card, Button, Col } from 'react-bootstrap';

export default function CardComponent(props) {
  const { onClick, item, img } = props;
  function handleClick(item) {
    if (onClick) {
      onClick(`Click Item: ${item}`)
    }
  }
  return (
    <Col md="4" className="mb-4">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary" onClick={() => handleClick(item)}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  )
};

CardComponent.propTypes = {
  onClick: PropTypes.func.isRequired
};
