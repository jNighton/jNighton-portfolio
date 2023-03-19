import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
    background: "#FFFFFF",
    borderRadius: 10,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
    margin: 20,
    background: "#EEEEEE",
    borderRadius: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
    margin: 20,
  },
  button: {
    backgroundColor: "#888888",
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 30,
    width: "25%",
    minWidth: 120,
    height: 75,
    borderRadius: 10,
    border: 0,
  },
};

export default function Contact() {
  return (
    <Container style={styles.container}>
      <Row>
      <h1 class="text-center" style={{margin: 20}}>Send me an email!</h1>
      </Row>
        <Col xs={12} style={styles.formContainer}>
        <form action="mailto: jakobdayton@gmail.com">
          <Row>
            <Col xs={12} md={6}>
                <div style={styles.inputContainer}>
                  <h3>
                    Name
                  </h3>
                  <input style={{width: "90%"}}
                    type="text"
                    name="name"
                  />
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div style={styles.inputContainer}>
                  <h3>
                    Email
                  </h3>
                  <input style={{width: "90%"}}
                    type="text"
                    name="email"
                  />
                </div>
            </Col>
          </Row>
          <Row>
           <Col xs={12}>
                <div style={styles.inputContainer}>
                  <h3>
                    Subject
                  </h3>
                  <input style={{width: "90%"}}
                    type="text"
                    name="subject"
                  />
                </div>
            </Col>
          </Row>
          <Row>
           <Col xs={12}>
                <div style={styles.inputContainer}>
                  <h3>
                    Message
                  </h3>
                  <textarea style={{width: "90%", height: 400}}
                    type="text"
                    name="message"
                    row="10"
                  ></textarea>
                </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
            <div style={styles.buttonContainer}>
                <button style={styles.button}
                type="submit">
                  Submit
                </button>
            </div>
            </Col>
          </Row>
        </form>
        </Col>
    </Container>
  );
}
