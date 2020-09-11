import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Components
import Header from "../components/header";
import Footer from "../components/footer";
// IMAGES
import InnerEffict from "../images/inner_pages.png";
//Link
import { Link } from "react-router-dom";
// Icon
import { IoIosFingerPrint, IoIosColorFilter } from "react-icons/io";



class Services extends Component {
    render() {
        return (
            <div className="relativeClass">
                {/* HEADER AREA */}
                <Header />
                {/* ##### INNER BANNER ####### */}
                <div className="inner_pages_banner">
                        <img className="inner_bottom_img" src={InnerEffict} alt=""></img>
                        <Container>
                            <div className="innerpagescontant">
                                <h3> Services </h3>
                                <p>
                                    What We Do
                                    <span> Home - Pages - Services </span>
                                </p>
                            </div>
                        </Container>
                    </div>
                    {/* ##### END INNER BANNER ####### */}
                    <div className="pages_area">
                        <Container>
                            <Row>
                                <Col sm={12} md={12} lg={12}>
                                    <div className="about_left_cntn_one">
                                        <div className="section-title">
                                            <div className="title-effect-defult">
                                                <div className="bar bar-top"></div>
                                                <div className="bar bar-right"></div>
                                                <div className="bar bar-bottom"></div>
                                                <div className="bar bar-left"></div>
                                            </div>
                                            <h6> Services </h6>
                                        </div>
                                    </div>
                                </Col>
                                <div className="service-page-section-two">
                                    <Row>
                                        <Col sm={12} md={4} lg={4}>
                                            <div className="service-block-three ">
                                                <div className="inner-box">
                                                    <div className="image">
                                                        <div className="icon-box">
                                                            <IoIosFingerPrint />
                                                        </div>
                                                        <Link to="/services"><img src="http://themexriver.com/tfhtml/osaas/images/resource/service-1.jpg" alt=""></img></Link>
                                                    </div>
                                                    <div className="lower-content">
                                                        <h4> <Link to="/services">UIX Design</Link> </h4>
                                                        <div className="text">Our attentive customer support</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} lg={4}>
                                            <div className="service-block-three ">
                                                <div className="inner-box">
                                                    <div className="image">
                                                        <div className="icon-box">
                                                            <IoIosColorFilter />
                                                        </div>
                                                        <Link to="/services"><img src="http://themexriver.com/tfhtml/osaas/images/resource/service-1.jpg" alt=""></img></Link>
                                                    </div>
                                                    <div className="lower-content">
                                                        <h4> <Link to="/services">Web Development</Link> </h4>
                                                        <div className="text">Our attentive customer support</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} lg={4}>
                                            <div className="service-block-three ">
                                                <div className="inner-box">
                                                    <div className="image">
                                                        <div className="icon-box">
                                                            <IoIosFingerPrint />
                                                        </div>
                                                        <Link to="/services"><img src="http://themexriver.com/tfhtml/osaas/images/resource/service-1.jpg" alt=""></img></Link>
                                                    </div>
                                                    <div className="lower-content">
                                                        <h4> <Link to="/services">Product Design</Link> </h4>
                                                        <div className="text">Our attentive customer support</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} lg={4}>
                                            <div className="service-block-three ">
                                                <div className="inner-box">
                                                    <div className="image">
                                                        <div className="icon-box">
                                                            <IoIosFingerPrint />
                                                        </div>
                                                        <Link to="/services"><img src="http://themexriver.com/tfhtml/osaas/images/resource/service-1.jpg" alt=""></img></Link>
                                                    </div>
                                                    <div className="lower-content">
                                                        <h4> <Link to="/services">UIX Design</Link> </h4>
                                                        <div className="text">Our attentive customer support</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} lg={4}>
                                            <div className="service-block-three ">
                                                <div className="inner-box">
                                                    <div className="image">
                                                        <div className="icon-box">
                                                            <IoIosFingerPrint />
                                                        </div>
                                                        <Link to="/services"><img src="http://themexriver.com/tfhtml/osaas/images/resource/service-1.jpg" alt=""></img></Link>
                                                    </div>
                                                    <div className="lower-content">
                                                        <h4> <Link to="/services">Web Development</Link> </h4>
                                                        <div className="text">Our attentive customer support</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} lg={4}>
                                            <div className="service-block-three ">
                                                <div className="inner-box">
                                                    <div className="image">
                                                        <div className="icon-box">
                                                            <IoIosFingerPrint />
                                                        </div>
                                                        <Link to="/services"><img src="http://themexriver.com/tfhtml/osaas/images/resource/service-1.jpg" alt=""></img></Link>
                                                    </div>
                                                    <div className="lower-content">
                                                        <h4> <Link to="/services">Product Design</Link> </h4>
                                                        <div className="text">Our attentive customer support</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                
                                
                            </Row>
                        </Container>
                    </div>
                {/* FOOTER  */}
                <Footer />
            </div>
        );
    }
}

export default Services;