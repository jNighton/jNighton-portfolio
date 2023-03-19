import React from 'react';
import bg from "./imgs/footerBg.png";
import sprite from "./imgs/pixelMe.gif";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
    bg: {
         backgroundImage: `url(${bg})`,
         backgroundSize: "contain",
         maxWidth: "100%", 
         position: "relative",
         marginTop: 10,
         padding: 30
    },
    sprite: {
        backgroundImage: `url(${sprite})`,
        position: "relative",
        bottom: 40,
        display: "flex",
        justifyContent: "space-between"
    },
    iconContainer: {
        maxHeight: 60,
        margin: 5,
      },
}

export default function Footer() {
    return (
        <Container  style={styles.bg}>
            <Row >
                <Col>
                <img src={sprite} style={styles.sprite}/>
                </Col>
                <Col >
                    <a href="https://github.com/jNighton">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original-wordmark.svg"
                        style={styles.iconContainer}/>
                    </a>
                </Col>
                <Col style={styles.iconContainer}>
                    <a href="https://www.linkedin.com/in/jakob-dayton-235885152/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/640px-LinkedIn_icon_circle.svg.png"
                        style={styles.iconContainer}/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}