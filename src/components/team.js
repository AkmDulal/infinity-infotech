import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Container } from 'react-bootstrap';
import AOS from 'aos'; 
// IMAGES
import team01 from "../images/team/team_01.png"
import team02 from "../images/team/team_02.png"
import team03 from "../images/team/team_03.png"
//Link
import { Link } from "react-router-dom";
// ICON
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";

// Components
import TeamLoader from "../components/teamLoader";


class team extends Component {
    constructor(props, context) { 
        super(props, context); 
        AOS.init({ duration: 2000 }); 
      }   
    state= {
        loading: true,
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    }


    sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
    };

    wait = async (milliseconds = 2000) => {
        await this.sleep(milliseconds);
        this.setState({  loading: false });
    };

    componentDidMount() {
        this.wait(2000);
    }

    render() {
        if (this.state.loading) return <TeamLoader />;
        return (
            <div>
                <Container>
                    <div className="team_area">
                        <div className="team_header">
                            <h5> <span className="aux-head-before"> Team </span>Member </h5>
                            <h3>Meet Our Team Of Expert </h3>
                            <p> All types of businesses need access to development resources, so we give you the option to decide <br></br> how much you need to use. </p>
                        </div>
                            <OwlCarousel
                                className="owl-theme team_boxx"
                                items="3"
                                loop
                                margin={10}
                                nav={false}
                                dots={false}
                                autoplay={true}
                                autoplayTimeout={2000}
                                responsive={this.state.responsive}
                            >
                                <div className="item">
                                    <div data-aos="fade-left" className="team_one team_mamber_effict">
                                        <img className="rounded_top" src={team01} alt="Images One"></img>
                                        <div className="team_text">
                                            <h6> Mr Rahaman </h6>
                                            <p> Manager </p>
                                            <div className="social_media">
                                                <Link className="team_social__icon" to="/"> <TiSocialFacebook /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialLinkedin /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialTwitter /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialYoutube /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div data-aos="fade-left" className="team_one shadow team_mamber_effict">
                                        <img className="rounded_top" src={team02} alt="Images One"></img>
                                        <div className="team_text">
                                            <h6> Mr Rahaman </h6>
                                            <p> Manager </p>
                                            <div className="social_media">
                                                <Link className="team_social__icon" to="/"> <TiSocialFacebook /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialLinkedin /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialTwitter /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialYoutube /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div data-aos="fade-left" className="team_one team_mamber_effict">
                                        <img className="rounded_top" src={team03} alt="Images One"></img>
                                        <div className="team_text">
                                            <h6> Mr Rahaman </h6>
                                            <p> Manager </p>
                                            <div className="social_media">
                                                <Link className="team_social__icon" to="/"> <TiSocialFacebook /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialLinkedin /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialTwitter /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialYoutube /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div data-aos="fade-left" className="team_one team_mamber_effict">
                                        <img className="rounded_top" src={team01} alt="Images One"></img>
                                        <div className="team_text">
                                            <h6> Mr Rahaman </h6>
                                            <p> Manager </p>
                                            <div className="social_media">
                                                <Link className="team_social__icon" to="/"> <TiSocialFacebook /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialLinkedin /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialTwitter /> </Link>
                                                <Link className="team_social__icon" to="/"> <TiSocialYoutube /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                    </div>
               </Container>
               <div className="team__Footer_d"></div>
            </div>
        );
    }
}

export default team;