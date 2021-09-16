import { Container, Row } from 'react-bootstrap';
import CardComponent from './CardComponent';
import hotel from '../images/hotel.jpg';

export function PropsComponent() {
  return (
    <Container>
      <Row>
        {
        [...Array(9).keys()].map((val, idx) =>
          <CardComponent key={idx} onClick={(item) => console.log(item)} item={val} img={hotel}/>
        )
        }
      </Row>
    </Container>
  );
};
