import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Discuss from './pages/discuss/discuss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container, Navbar, Nav } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <div className='page'>
      <div className='header'>
        <div className='nav'>
        <Nav.Link className='link' href="/">Home</Nav.Link>
        <Nav.Link className='link' href="/discuss">Discuss</Nav.Link>
        </div>
      </div>
        <Container>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/discuss" element={<Discuss/>} />
        </Routes>
        </Container>
        </div>
    </Router>
  );
}



export default App;
