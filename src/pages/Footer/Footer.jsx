import React from 'react';
import './styles.scss';
import { CopyrightIcon } from '../../assets/index' 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={CopyrightIcon} alt="Copyright Logo" className="footer-logo" />
        <span>2024 Kartik Kapkoti</span>
      </div>
      <div className="footer-right">
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top <span className="arrow">↑</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
