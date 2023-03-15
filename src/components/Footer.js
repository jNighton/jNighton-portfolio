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
    link: {
        display: "flex",
        alignItems:"center",
        justifyContent: "space-between",
    }
}

export default function Footer() {
    return (
        <Container  style={styles.bg}>
            <Row >
                <Col>
                <img src={sprite} style={styles.sprite}/>
                </Col>
                <Col style={styles.link}>
                    <h3>Github</h3>
                </Col>
                <Col style={styles.link}>
                    <h3>LinkdIn</h3>
                </Col>
            </Row>
        </Container>
    );
}