import React from 'react';
import TaxeQC from './Components/TaxeQC';
import Ciel from './images/Ciel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

function App() {
  return (
    <div className="App-header">

      <Container>
        <Row>
          <Col><Ciel/></Col>
          <Col><h1>Calcul des taxes</h1></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col><TaxeQC/></Col>
          <Col></Col>
        </Row>

      </Container>

        <p>@ cégep limoilou - 2023</p>
    </div>
  );
}

export default App;

//https://jacob-landry.github.io/Jacob-Landry/