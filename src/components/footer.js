import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// IMAGES
import FooterBG from "../images/footer/footer_bg.png";
import FooterBGOne from "../images/footer/footer_bg_02.png";
// ICON
import { IoIosArrowRoundForward } from "react-icons/io";

class footer extends Component {
    render() {
        return (
            <div>
                <div className="footer_area ">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <div className="footer_cliend">
                                    <img src={'https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/client-1@2x@2x.png'} alt="cliend"></img>
                                    <img src={'https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/client-1@2x@2x.png'} alt="cliend"></img>
                                    <img src={'https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/client-1@2x@2x.png'} alt="cliend"></img>
                                    <img src={'https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/client-1@2x@2x.png'} alt="cliend"></img>
                                    <img src={'https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/client-1@2x@2x.png'} alt="cliend"></img>
                                    <img src={'https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/client-1@2x@2x.png'} alt="cliend"></img>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <div className="footer_text">
                                    <h3> Have an idea or project? let's talk </h3>
                                    <h5> Contact <IoIosArrowRoundForward className="footer_icon" />  </h5>
                                    <p>
                                        +1(888)123 45 67
                                        <span> infinityinfotech@gmail.com </span>
                                    </p>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <div className="footer_text">
                                    <h3> Send me tips, trends, freebies, updates & offers. </h3>
                                    <form className="footer_imput">
                                        <div className="foter_box">
                                            <input className="footer_imput01" type="email" name="EMAIL" placeholder="Insert Your Email Address" required=""></input>
                                            <input className="subscribe_footer" type="submit" value="SUBSCRIBE" required=""></input>
                                        </div>
                                    </form>
                                    <p className="footer_p_right"> Jabbar Tower, House#42 (Level-6), Road#135, Gulshan-01, Dhaka-1212  </p>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={12}>
                                <p className="footer_bottm">  © 2020 Phlox . All Rights Reserved </p>
                            </Col>
                        </Row>
                        <img className="footerBg_01" src={FooterBG} alt="footer bg"></img>
                        <img className="footerBg_02" src={FooterBGOne} alt="footer bg"></img>
                    </Container>
                </div>
            </div>
        );
    }
}

export default footer;