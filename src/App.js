import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import AmplifyStudio from './components/AmplifyStudio';
import JavaProgrammer from './components/JavaProgrammer';
import LamadaxDynamoDB from './components/LamadaxDynamoDB';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/Amplify">Amplify</Nav.Link>
              <Nav.Link as={Link} to="/Java">Java</Nav.Link>
              <Nav.Link as={Link} to="/LamadaDDB">LamadaDDB</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Amplify" element={<AmplifyStudio />} />
          <Route path="/Java" element={<JavaProgrammer />} />
          <Route path="/LamadaDDB" element={<LamadaxDynamoDB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
