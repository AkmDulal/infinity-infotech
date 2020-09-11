import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos'; 
// IMAGES
import AboutImg from "../images/about_img1.png";
import AboutBg from "../images/about_img2.png";
//Link
import { Link } from "react-router-dom";
// ICON
import { HiViewGrid, HiOutlineUserGroup } from "react-icons/hi";

// Components
import AboutLoader from "../components/aboutLoader";


class about extends Component {
    constructor(props, context) { 
        super(props, context); 
        AOS.init({ duration: 2000 }); 
      }   

    //   componentWillReceiveProps (){ 
    //     AOS.scroll(); 
    //   } 

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
        if (this.state.loading) return <AboutLoader />;
        return (
            <div>
                <div className="about_area">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div data-aos="fade-left" className="about_images">
                                <img src={AboutImg} alt="about"></img>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div data-aos="fade-right" className="about_contant">
                                <h6> <span className="aux-head-before"> About </span>  Infinity Infotech </h6>
                                <h3> More than 7+ years we provide IT solutions </h3>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <div className="about_propoz">
                                    <div className="about_projt">
                                        <span> <HiViewGrid /> 376 </span>
                                        <p>Completed projects</p>
                                    </div>
                                    <div className="about_projt">
                                        <span> <HiOutlineUserGroup /> 20 </span>
                                        <p>Expert team members</p>
                                    </div>
                                </div>
                                <Link className="defult_button " to="/about">
                                    <span> Read More </span>
                                </Link>

                            </div>
                        </Col>
                    </Row>
                </Container>
                <img className="about_bg" src={AboutBg} alt="about"></img>
                </div>
            </div>
        );
    }
}

export default about;