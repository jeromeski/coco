import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Landing = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1 className='mt-5 display-1 font-weight-bold'>Coco</h1>
          <h3>Collect surveys from your clients</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;