import { Col, Container, Row } from 'reactstrap';
import { useState } from 'react';
import './App.css';
import MyForm from './components/cajas/form';
import List from './components/cajas/list';

const initialState = [];

function App() {
  const [cajas, setCajas] = useState(initialState)
  return (
    <Container>
      <Row>
        <Col md={{ offset: 3, size: 6 }} sm="12">
          <MyForm cajas={ cajas }  setCajas={ setCajas }/>
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 3, size: 6 }} sm="12">
          <List cajas={ cajas }/>
        </Col>
      </Row>    
    </Container>
    
  );
}

export default App;
