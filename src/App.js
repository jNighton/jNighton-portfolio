import React from "react";
import bgImg from "./components/imgs/skyBg.png";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from './components/Footer';

const styles = {
    bg: {
         backgroundImage: `url(${bgImg})`,
         backgroundSize: "cover",
         backgroundAttachment: "fixed",

    },
}

const App = () => {
    return (
    <div>
        <div class="bg-image" style={styles.bg}>
        <PortfolioContainer />
        <Footer />
        </div>
    </div>
    );
}

export default App;
