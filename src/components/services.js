import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos'; 

//Link
import { Link } from "react-router-dom";

// Icon 
import { SiAirplayvideo } from "react-icons/si";
import { HiCloudDownload } from "react-icons/hi";
import { GrTemplate, GrAssistListening } from "react-icons/gr";


import Loader from "../components/skeleton.js"

class services extends Component {
    constructor(props, context) { 
        super(props, context); 
        AOS.init({ duration: 2000 }); 

      } 


    state = { loading: true };
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
        if (this.state.loading) return <Loader />;
        return (
            <div>
                <div className="services_area">
                    <Container>
                        <Row>
                            <Col sm={12} md={5} lg={5}>

                                <div data-aos="fade-left" className="services_text">
                                {/* LOADING EFFICT */}
                                {/* {(() => {
                                    if (this.state.loading) return <Loader />;
                                })()} */}
                                    
                                    <h3>  We are here to <br></br> make your <span> website </span> <br></br> look more <span> elegant </span> <br></br> and   stylish! </h3>
                                    <div className="defult_icon"></div>
                                    <Link className="defult_button bTnmargn_top" to="/services">
                                        <span> View All </span>
                                    </Link>
                                </div>
                            </Col>
                            <Col sm={12} md={7} lg={7}>
                                <div data-aos="fade-right" className="services_box">
                                    <Row>
                                        <Col sm={12} md={6} lg={6}>
                                            <div className="services_effict">
                                                <div className="dervices_one">
                                                    <SiAirplayvideo/>
                                                    <h3>Speed Optimization</h3>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={6} lg={6}>
                                            <div className="services_effict">
                                                <div className="dervices_one">
                                                    <HiCloudDownload />
                                                    <h3>Cloud Solutions</h3>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={6} lg={6}>
                                            <div className="services_effict">
                                                <div className="dervices_one">
                                                    <GrTemplate />
                                                    <h3>Website Design</h3>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={6} lg={6}>
                                            <div className="services_effict">
                                                <div className="dervices_one">
                                                    <GrAssistListening />
                                                    <h3>Online Marketing</h3>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <h2 className="expereance_area">07 years of experience helping people for best solutions</h2>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => ({ loading: state.application.loading })
export default services;