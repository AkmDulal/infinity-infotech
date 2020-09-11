import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Components
import Header from "../components/header";
import Footer from "../components/footer";
// IMAGES
import team01 from "../images/team/team_01.png"
import team02 from "../images/team/team_02.png"
import team03 from "../images/team/team_03.png"
//Link
import { Link } from "react-router-dom";
// ICON
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";

class Team extends Component {
    render() {
        return (
            <div>
                {/* HEADER AREA */}
                <Header />
                <div className="team_pages_">
                    <Container>
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
                    </Container>
                </div>
                {/* FOOTER AREA */}
                <Footer />
            </div>
        );
    }
}

export default Team;