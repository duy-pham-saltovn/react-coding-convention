import { Alert } from 'react-bootstrap';

export default function FunctionalComponent() {
  return (
    <div className="container">
      <Alert variant="info">
        This is FunctionalComponent
        {process.env.REACT_APP_NOT_SECRET_CODE}
      </Alert>
      <Alert variant="success">
        {process.env.REACT_APP_NOT_SECRET_CODE}
      </Alert>
      <Alert variant="warning">
        {process.env.REACT_APP_DEMO}
      </Alert>
    </div>
  );
}
