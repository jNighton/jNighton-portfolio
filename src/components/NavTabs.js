import React from 'react';

const styles = {
  navTab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#FFFFFFAA",
    margin: "2, 2, 2, 2",
  },
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav" style={styles.navTab}>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
