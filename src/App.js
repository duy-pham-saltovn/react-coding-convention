import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunctionalComponent from './views/FunctionalComponent';
import CallFunc from './views/CallFunc';
import StateFunc from './views/StateFunc';
import { PropsComponent } from './views/PropsComponent';
import { UseStateComponent } from './views/UseStateComponent';

export default function App() {
  return (
    <Router>
      <>
        <Nav
          activeKey="/function-component"
          className="container"
        >
          <Nav.Item>
            <Nav.Link href="/function-component">Function Component</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/call-func">Call Function</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/state">State</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/props">Props</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/use-effect">useEffect</Nav.Link>
          </Nav.Item>
        </Nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/function-component">
            <FunctionalComponent/>
          </Route>
          <Route path="/call-func">
            <CallFunc />
          </Route>
          <Route path="/state">
            <StateFunc />
          </Route>
          <Route path="/props">
            <PropsComponent />
          </Route>
          <Route path="/use-effect">
            <UseStateComponent />
          </Route>
        </Switch>
      </>
    </Router>
  );
};
