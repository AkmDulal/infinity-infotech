import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Components
import SliderLoader from "../components/sliderLoader";



//Link
import { Link } from "react-router-dom";

// SLIDER 
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

// Icon
// import { RiFacebookLine, RiInstagramLine, RiYoutubeLine, RiTwitterFill } from "react-icons/ri";

// Images
import Slider1 from "../images/slider/slider2.png"
import React_i from "../images/react_i.png"
import Android_i from "../images/android_i.png"
import Nodejs_i from "../images/nodejs_i.png"
import Mongodb_i from "../images/mongodb_i.png"

class slider extends Component {
    state = { loading: true };
        sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };

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
        if (this.state.loading) return <SliderLoader />;
        return (
            <div>

                <div className="slider_area">
                    <Splide
                        options={{
                            rewind: true,
                            autoplay: true,
                            gap: '.5rem',
                        }}
                    >
                        <SplideSlide>
                            <div className="full_alider__area">
                                <Container>
                                    <Row>
                                        <Col sm={12} md={5} lg={5}>
                                            <div className="slider_text">
                                                <h6> 17 YEARS OF EXPERIENCE </h6>
                                                <h3> A Group of  <span className="slider_highlight">Expert Planners</span> </h3>
                                                <div className="slider_border"></div>
                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.. </p>
                                                <Link className="defult_button" to="/about">
                                                    <span> Read More </span>
                                                </Link>
                                                <div className="slider_social_media">
                                                    <Link className="social_icon_txt" to="/"> <img className="slider__icon" src={React_i} alt="icon"></img> ANGULER </Link>
                                                    <Link className="social_icon_txt" to="/">  <img className="slider__icon" src={Android_i} alt="icon"></img>  ANDROID </Link>
                                                    <Link className="social_icon_txt" to="/">  <img className="slider__icon" src={Nodejs_i} alt="icon"></img>  NODE JS </Link>
                                                    <Link className="social_icon_txt" to="/">  <img className="slider__icon" src={Mongodb_i} alt="icon"></img>  MONGODB </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <div className="slider_images_area">
                                            <img src={Slider1} alt="slider one"></img>
                                        </div>

                                    </Row>
                                </Container>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="full_alider__area">
                                <Container>
                                    <Row>
                                        <Col sm={12} md={5} lg={5}>
                                            <div className="slider_text">
                                                <h6> 17 YEARS OF EXPERIENCE </h6>
                                                <h3> A Group of  <span className="slider_highlight">Expert Planners</span> </h3>
                                                <div className="slider_border"></div>
                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.. </p>
                                                <Link className="defult_button" to="/about">
                                                    <span> Read More </span>
                                                </Link>
                                                <div className="slider_social_media">
                                                    <Link className="social_icon_txt" to="/"> <img className="slider__icon" src={React_i} alt="icon"></img> ANGULER </Link>
                                                    <Link className="social_icon_txt" to="/">  <img className="slider__icon" src={Android_i} alt="icon"></img>  ANDROID </Link>
                                                    <Link className="social_icon_txt" to="/">  <img className="slider__icon" src={Nodejs_i} alt="icon"></img>  NODE JS </Link>
                                                    <Link className="social_icon_txt" to="/">  <img className="slider__icon" src={Mongodb_i} alt="icon"></img>  MONGODB </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <div className="slider_images_area">
                                            <img src={Slider1} alt="slider one"></img>
                                        </div>

                                    </Row>
                                </Container>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="full_alider__area">
                                <Container>
                                    <Row>
                                        <Col sm={12} md={5} lg={5}>
                                            <div className="slider_text">
                                                <h6> 17 YEARS OF EXPERIENCE </h6>
                                                <h3> A Group of  <span className="slider_highlight">Expert Planners</span> </h3>
                                                <div className="slider_border"></div>
                                                <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.. </p>
                                                <Link className="defult_button" to="/about">
                                                    <span> Read More </span>
                                                </Link>
                                                <div className="slider_social_media">
                                                    <Link className="social_icon_txt" to="/"> <img className="slider__icon" src={React_i} alt="icon"></img> ANGULER </Link>
                                                    <Link className="social_icon_txt" to="/">  <img className="slider__icon" src={Android_i} alt="icon"></img>  ANDROID </Link>
                                                    <Link className="social_icon_txt" to="/">  <img className="slider__icon" src={Nodejs_i} alt="icon"></img>  NODE JS </Link>
                                                    <Link className="social_icon_txt" to="/">  <img className="slider__icon" src={Mongodb_i} alt="icon"></img>  MONGODB </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <div className="slider_images_area">
                                            <img src={Slider1} alt="slider one"></img>
                                        </div>

                                    </Row>
                                </Container>
                            </div>
                        </SplideSlide>
                        

                    
                    </Splide>
                    {/* </ScrollAnimation> */}
                </div>
            </div>
        );
    }
}

export default slider;