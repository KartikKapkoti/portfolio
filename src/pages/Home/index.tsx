import React from 'react'
import Header from '../Header'
import AboutMe from '../About'
import Skills from '../Skills'
import Carousel from '../Carousel'
import Contacts from '../Contacts'
import Footer from '../Footer/Footer'

const HomePage = () => {
    return (
        <div className="home">
            <Header />
            <section id='about'>
            <AboutMe /> 
            </section>
             <section id='skills'>
             <Skills />
             </section>
            <Carousel />
            <section id='contacts'>
            <Contacts /> 
            </section>
            <Footer/>
        </div>
    )
}

export default HomePage


/* <section id="home">
   <h1>Home Section</h1>
</section>
<section id="about">
  <AboutMe />
</section>
<section id="skills">
  <Skills />
</section>
<section id="contacts">
  <Contacts />
</section>  */