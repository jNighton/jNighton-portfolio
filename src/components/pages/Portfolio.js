import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "2, 2, 2, 2",
  }
};

export default function Portfolio() {
  return (
    <Container>
    <h1 class="text-center">Portfolio</h1>
    <Row>
    <Col xs={12} md={4} style={styles.container}>
      <h3>
        Project 1
      </h3>
    </Col>
    <Col xs={12} md={4} style={styles.container}>
      <h3>
        Project 1
      </h3>
    </Col>
    <Col xs={12} md={4} style={styles.container}>
      <h3>
        Project 1
      </h3>
    </Col>
    </Row>
    <Row>
    <Col xs={12} md={4} style={styles.container}>
      <h3>
        Project 1
      </h3>
    </Col>
    <Col xs={12} md={4} style={styles.container}>
      <h3>
        Project 1
      </h3>
    </Col>
    <Col xs={12} md={4} style={styles.container}>
      <h3>
        Project 1
      </h3>
    </Col>
    </Row>
  </Container>
  );
}
