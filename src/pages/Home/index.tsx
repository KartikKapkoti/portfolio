
import React from 'react';
import Header from './Header';
import './styles.scss';
import AboutMe from '../About/AboutMe';


const HomePage = () => {
  return (
   <div className="home">
    <Header/>
    <AboutMe/>
   </div>
  );
  
};

export default HomePage;
