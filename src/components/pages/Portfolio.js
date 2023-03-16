import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hh from "../imgs/hydro-home-thumbnail.png";
import ecbe from "../imgs/ecommerce-backend-thumbnail.png";
import jsq from "../imgs/quiz-project-thumbnail.png";
import pwg from "../imgs/password-generator-thumbnail.png";
import sas from "../imgs/slashed-and-smashed-thumbnail.png";
import rmg from "../imgs/readme-generator-thumbnail.png";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "2, 2, 2, 2",
  },
  align: {
    alignItems: "center",
    justifyContent: "center",
  },
  projectContainer: {
    display: "block",
    background: "#FFFFFF",
    borderRadius: 10,
    textAlign: "center",
    margin: 20,
    paddingBottom: 5,
  },
  imgContainer: {
    margin: 10,
    maxWidth: "90%",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  }
};

export default function Portfolio() {
  return (
    <Container>
    <h1 class="text-center">Portfolio</h1>
    <Row>
    <Col xs={12} md={4} style={styles.align}>
      <div style={styles.projectContainer}>
        <a href="https://ancient-anchorage-85467.herokuapp.com/login">
          <img src = {hh} 
            style={styles.imgContainer}/>
        </a>
        <h3>
            Hydro Home
          </h3>
      </div>
    </Col>
    <Col xs={12} md={4} style={styles.align}>
      <div style={styles.projectContainer}>
        <a href="https://github.com/jNighton/ecommerce-back-end">
          <img src = {ecbe}  
            style={styles.imgContainer}/>
        </a>
        <h3>
            e-Commerce Backend
          </h3>
      </div>
    </Col>
    <Col xs={12} md={4} style={styles.align}>
      <div style={styles.projectContainer}>
        <a href="https://jnighton.github.io/quiz-project/">
          <img src = {jsq} 
            style={styles.imgContainer}/>
        </a>
        <h3>
            JS Quiz
        </h3>
      </div>
    </Col>
    </Row>
    <Row>
    <Col xs={12} md={4} style={styles.align}>
      <div style={styles.projectContainer}>
        <a href="https://jnighton.github.io/password-generator/">
          <img src = {pwg}  
            style={styles.imgContainer}/>
        </a>
        <h3>
            Password Generator
        </h3>
      </div>
    </Col>
    <Col xs={12} md={4} style={styles.align}>
      <div style={styles.projectContainer}>
        <a href="https://jnighton.github.io/Horror-Finder/">
          <img src = {sas}  
            style={styles.imgContainer}/>
        </a>
        <h3>
            Slashed and Smashed
        </h3>
      </div>
    </Col>
    <Col xs={12} md={4} style={styles.align}>
      <div style={styles.projectContainer}>
        <a href="https://github.com/jNighton/readme-generator/">
          <img src = {rmg}  
            style={styles.imgContainer}/>
        </a>
        <h3>
            Readme Generator
        </h3>
      </div>
    </Col>
    </Row>
  </Container>
  );
}
