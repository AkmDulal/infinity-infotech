import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Components
import Header from "../components/header";
import Footer from "../components/footer";
// Icon
// import { IoMdInformation } from "react-icons/io";

// IMAGES
import InnerEffict from "../images/inner_pages.png";
import ContactIcon from "../images/contact/contact_1.png";
import ContactIcon2 from "../images/contact/contact_adrs.png";
import ContactIcon3 from "../images/contact/contact_m.png";
// import ContactImages from "../images/contact.png";


class Contact extends Component {
    render() {
        return (
            <div>
                {/* HEADER AREA */}
                <Header />
                {/* ##### INNER BANNER ####### */}
                <div className="inner_pages_banner">
                    <img className="inner_bottom_img" src={InnerEffict} alt=""></img>
                    <Container>
                        <div className="innerpagescontant">
                            <h3> Contact Us </h3>
                            <p>
                                We're Building Modern And High Software
                                <span> Home - Pages - Contact Us </span>
                            </p>
                        </div>
                    </Container>
                </div>
                <div className="contact__area">
                    <Container>
                        {/* ##### END INNER BANNER ####### */}
                        <div className="pages_area">
                            <Container>
                                <Row>
                                    <Col sm={12} md={6} lg={6}>
                                        <div className="about_left_cntn_one contact_left">
                                            <div className="section-title">
                                                <div className="title-effect-defult">
                                                    <div className="bar bar-top"></div>
                                                    <div className="bar bar-right"></div>
                                                    <div className="bar bar-bottom"></div>
                                                    <div className="bar bar-left"></div>
                                                </div>
                                                <h6> Contact Us </h6>
                                                <h1>Get In Touch</h1>
                                                <div class="text">The <span>Data Transfer Project</span> was launched in <span>2020</span> to create an open-source, service-to-service data portability platform.</div>
                                                <div className="contact__icon">
                                                    <span>
                                                        <img src={ContactIcon} alt="Contact Icon"></img>
                                                    </span>
                                                    <h5> Phone Number</h5>
                                                    <h6>  +8802-985787  </h6>
                                                </div>
                                                <div className="contact__icon">
                                                    <span>
                                                        <img src={ContactIcon2} alt="Contact Icon"></img>
                                                    </span>
                                                    <h5> Email Address</h5>
                                                    <h6> info@infinitybd-my.com  </h6>
                                                </div>
                                                <div className="contact__icon">
                                                    <span>
                                                        <img src={ContactIcon3} alt="Contact Icon"></img>
                                                    </span>
                                                    <h5> Office Address</h5>
                                                    <h6> Jabbar Tower, House#42 (Level-6), Road#135, Gulshan-01, Dhaka-1212   </h6>
                                                </div>


                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} lg={6}>
                                        <div className="inner_column">
                                            <div className="contact_form">
                                                <form novalidate="novalidate">
                                                    <div className="form-group">
                                                        <span className="icon far fa-user"></span>
                                                        <input className="contact_input" type="text" placeholder="Enter your name"></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <span className="icon far fa-envelope"></span>
                                                        <input className="contact_input" type="email" placeholder="Enter your Email" ></input>
                                                    </div>

                                                    <div className="form-group">
                                                        <span className="icon far fa-edit"></span>
                                                        <textarea className="contact_input" name="message" placeholder="Enter your Message"></textarea>
                                                    </div>

                                                    <div className="form-group text-center">
                                                        <button type="submit" className="new_class_btn theme-btn btn-style-four defult_button bTnmargn_top"><span className="txt">Get A Quote</span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </Col>




                                </Row>
                            </Container>
                        </div>

                    </Container>
                </div>
                {/* ###### FOOTER AREA ######  */}
                <Footer />
            </div>
        );
    }
}

export default Contact;