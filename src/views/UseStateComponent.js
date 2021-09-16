import { Container, Row, Alert, Button } from 'react-bootstrap';
import CardComponent from './CardComponent';
import hotel from '../images/hotel.jpg';
import { useState, useEffect } from 'react';

export function UseStateComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    function fetchData() {
      setData(oldData => [...oldData, ...Array(3).keys()]);

      setIsLoading(false);
    }
    fetchData();
  }, [page]);

  function handleChangePage() {
    setPage(page + 1);
    // Do something here
  }

  return (
    <Container>
      <Row>
        {
          isLoading ? 'Loading' :  
          !data.length ? <Alert variant="warning">No data</Alert> :
            data.map((val, idx) => <CardComponent key={idx} onClick={(item) => console.log(item)} item={val} img={hotel} />)
        }
      </Row>
      <Row>
        <Button onClick={handleChangePage}>Change page</Button>
      </Row>
    </Container>
  );
};
