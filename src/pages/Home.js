import React, { Component } from 'react';

// ANIMATE
import "animate.css/animate.min.css";
import "animate.css";
import "aos/dist/aos.css"

// import Skeleton from '@material-ui/lab/Skeleton';

// OWL-CAROUSEL
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Components
import Header from "../components/header";
import Slider from "../components/slider";
import Services from "../components/services";
import Footer from "../components/footer";
import AboutUs from "../components/about";
import TeamManber from "../components/team";
import Portfolio from "../components/portfolio";









class home extends Component {
  render() {
    return (
      <div>
        {/* ##### HEADER AREA ######## */}
        <Header />
        {/* ##### SLIDER AREA ######## */}
        <Slider />


        



        {/* ##### SERVICES AREA ######## */}
        <Services/>
        {/* ##### About AREA ######## */}
        <AboutUs />
        {/* ##### TEAM MAMBER AREA ######## */}
        <TeamManber />
        {/* ##### Portfolio AREA ######## */}
        <Portfolio />
        {/* ##### FOOTER AREA ######## */}
        <Footer />
      </div>
    );
  }
}

export default home;