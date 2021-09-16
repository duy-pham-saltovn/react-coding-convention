# React Functional components, React Hooks Rules and coding conventions

> The reason use functional component: [Click here](https://programmingwithmosh.com/react/react-functional-components/)

## Plugin Checks rules of Hooks and Checks effect dependencies
> [eslint-plugin-react-hooks](https://reactjs.org/docs/hooks-rules.html#eslint-plugin)

## Rules:

**Only Call Hooks at the Top Level**

**Only Call Hooks from React Functions.**

**Don’t call Hooks from regular JavaScript functions. Instead, you can:**

- Call Hooks from React function components.

- Call Hooks from custom Hooks (we’ll learn about them on the next page).

**Function name insite Functional components must follow as below: camelCase**

```JS
// TODO correct
function handleAdd() {
  // TODO
}

// In-correct
function HandleAdd() {
  // TODO
}

function Handleadd() {
  // TODO
}
```

**In function components must have export default for root functional name and the name must follow PascalCase:**

```JS
export default function ToDo() {
  function doTask() {
    console.log('Done');
  }
};
```
**Two way define function handle in Functional components in ReactJS [Recommended in docs](https://reactjs.org/docs/components-and-props.html#function-and-class-components)**
```JS
export default function ToDo() {
  // Recommended: It build faster. Depending on the case we will use normal function or ES6
  function doTask() {
    return <h1>Task one</h1>; 
  }
  // Not
  const doTaskTwo = () => {
    return <h1>Task Two</h1>;
  }
};
```

**How to call function in event no params:**
```JS
export default function App() {
  function handleClick() {
    console.log('clicked')
  }
  return (
    <div>You can click <button onClick={handleClick}>Here</button></div>
  );
};
```

**How to call function in event have params:**
```JS
export default function App() {
  function handleClick(name) {
    console.log(`You ${name}`)
  }
  return (
    <div>
    You can click <button onClick={() => handleClick('call me!')}>Here</button>
    </div>
  );
};

No use: <button onClick={handleClick('call me!')}>Here</button>
=> It will excute every render
```

**[Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html): Must be outsite Functional components or before export Function components**

Example 1:
```JS
import PropTypes from 'prop-types';

export default function App(props) {
  const { onClick } = props;
  function handleClick(name) {
    onClick(name);
  }
  return (
    <div>You can click <button onClick={() => handleClick('call me!')}>Here</button>
    </div>
  );
};

App.propTypes = {
  onClick: PropTypes.func.isRequired
};

```

Example 2:
```JS
import PropTypes from 'prop-types';

function App(props) {
  const { onClick } = props;
  function handleClick(name) {
    onClick(name);
  }
  return (
    <div>You can click <button onClick={() => handleClick('call me!')}>Here</button>
    </div>
  );
};

App.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default App();
```

**Init state in Functional Components and the sate name follow camelCase**

```JS
import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(false); // Correct:
  // const [isLoading] = useState(false); // Correct: 
  // const [isloading, setisloading] = useState(false); // In-correct
  // const [isLoading, setisloading] = useState(false); // In-correct
  return (
    <div className="container">
      { isLoading ? 'Loading' : <h2>The Cat</h2> }
      <button onClick={() => setIsLoading(true)}><button>
    </div>
  );
};
```

**When we will code inline and When we need to separate as new function**

```JS
import { Container, Row, Alert } from 'react-bootstrap';
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
      setData([...Array(9).keys()]);
      setIsLoading(false);
    }
    fetchData();
  }, [page]);

  function handleChangePage() {
    setPage(page + 1);
    // TODO something here
  }

  return (
    <Container>
      <Row>
        {
          !data.length ? <Alert variant="warning">No data</Alert> :
            data.map((val, idx) => <CardComponent key={idx} onClick={(item) => console.log(item)} item={val} img={hotel} />)
        }
      </Row>
      <Row><Button onClick={handleChangePage}></Button></Row>
    </Container>
  );
};
