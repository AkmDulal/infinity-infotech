import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
// Components
import Header from "../components/header";
import Footer from "../components/footer";

// IMAGES
import InnerEffict from "../images/inner_pages.png";
import AboutInner from "../images/about_img1.png";

import team01 from "../images/team/team_01.png"
import team02 from "../images/team/team_02.png"
import team03 from "../images/team/team_03.png"

// ICON
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";



class About extends Component {
    render() {
        return (
            <div>
                <div className="relativeClass">
                    <Header />
                    {/* ##### INNER BANNER ####### */}
                    <div className="inner_pages_banner">
                        <img className="inner_bottom_img" src={InnerEffict} alt=""></img>
                        <Container>
                            <div className="innerpagescontant">
                                <h3> About Us </h3>
                                <p>
                                    We're Building Modern And High Software
                                <span> Home - Pages - About Us </span>
                                </p>
                            </div>
                        </Container>
                    </div>
                    {/* ##### END INNER BANNER ####### */}
                    <div className="pages_area">
                        <Container>
                            <Row>
                                <Col sm={12} md={7} lg={7}>
                                    <div className="about_left_cntn_one">
                                        <div className="section-title">
                                            <div className="title-effect-defult">
                                                <div className="bar bar-top"></div>
                                                <div className="bar bar-right"></div>
                                                <div className="bar bar-bottom"></div>
                                                <div className="bar bar-left"></div>
                                            </div>
                                            <h6> About Us </h6>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                            <br></br>
                                                <br></br>
                                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                            <br></br>
                                                <br></br>
                                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                             </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={5} lg={5}>
                                    <div className="about_left_cntn_one">
                                        <div className="section-title">
                                            <img src={AboutInner} alt="About Inner"></img>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={12} lg={12}>
                                    <div className="about_pages_team">
                                        <Row>
                                            <Col sm={12} md={3} lg={3}>
                                                <div className="team_one team_mamber_effict">
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
                                            </Col>
                                            <Col sm={12} md={3} lg={3}>
                                                <div className="team_one shadow team_mamber_effict">
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
                                            </Col>
                                            <Col sm={12} md={3} lg={3}>
                                                <div className="team_one team_mamber_effict">
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
                                            </Col>
                                            <Col sm={12} md={3} lg={3}>
                                                <div className="team_one team_mamber_effict">
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
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default About;