import React from 'react';
import me from "../imgs/me8.JPG";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    margin: "2, 2, 2, 2",
  },
  me: {
    maxWidth: 250,
    maxHeight: 250,
    alignItems: "center",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
  },
  techContainer: {
    display: "block",
    background: "#FFFFFF",
    borderRadius: 10,
    textAlign: "center",
    padding: 20,
    margin: 20,
    maxWidth: 300,
  },
  iconContainer: {
    maxHeight: 60,
    margin: 5,
  },
  align: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  }
};

export default function About() {
  return (
    <Container>
      <h1 class="text-center">About Me</h1>
      <Row>
      <Col xs={12} md={8} style={styles.container}>
        <p style={styles.text}>
        Hi! My name's Jakob Dayton and I'm an up and coming fullstack web developer from Charlotte, North Carolina.
        I'm an avid people pleaser and work well in groups as well as on my own. I excel in combining analytical thinking
        and creativity in order to make my ideas come alive. With experience in all the tech listed below, I might just be the right fit for you or your team.
        </p>
      </Col>
      <Col xs={12} md={4} style={styles.imgContainer}>
        <img src={me} style={styles.me} alt = "A picture of me"></img>
      </Col>
      </Row>
      <h1 class="text-center" style={{margin:60}}>Tech That I Use</h1>
      <Row>
        <Col xs={6} md={3}>
          <div style={styles.techContainer}>
            <img src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
            style={styles.iconContainer}/>
            <h5>Javascript</h5>
          </div>
          <div style={styles.techContainer}>
            <img src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" 
            style={styles.iconContainer}/>
            <h5>Node.js</h5>
          </div>
          <div style={styles.techContainer}>
            <img src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" 
            style={styles.iconContainer}/>
            <h5>Express</h5>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div style={styles.techContainer}>
            <img src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" 
            style={styles.iconContainer}/>
            <h5>HTML5</h5>
          </div>
          <div style={styles.techContainer}>
            <img src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" 
            style={styles.iconContainer}/>
            <h5>React</h5>
          </div>
          <div style={styles.techContainer}>
            <img src = "https://www.chartjs.org/img/chartjs-logo.svg" 
            style={styles.iconContainer}/>
            <h5>Chart.js</h5>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div style={styles.techContainer}>
            <img src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" 
            style={styles.iconContainer}/>
            <h5>CSS</h5>
          </div>
          <div style={styles.techContainer}>
            <img src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" 
            style={styles.iconContainer}/>
            <h5>Bootstrap</h5>
          </div>
          <div style={styles.techContainer}>
            <img src = "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sequelize/sequelize-plain.svg" 
            style={styles.iconContainer}/>
            <h5>Sequelize</h5>
          </div>
        </Col>
        <Col xs={6} md={3}>
        <div style={styles.techContainer}>
            <img src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" 
            style={styles.iconContainer}/>
            <h5>MySQL</h5>
          </div>
          <div style={styles.techContainer}>
            <img src = "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/graphql/graphql-plain.svg" 
            style={styles.iconContainer}/>
            <h5>GraphQL</h5>
          </div>
          <div style={styles.techContainer}>
            <img src = "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" 
            style={styles.iconContainer}/>
            <h5>MongoDB</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
}