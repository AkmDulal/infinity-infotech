import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
// Components
import Header from "../components/header"
import Footer from "../components/footer"
// IMAGES
import Images01 from "../images/blog01.jpg";
// Icon
import { IoIosArrowForward, IoIosCalendar, IoIosPerson} from "react-icons/io";
class Blog extends Component {
    render() {
        return (
            <div>
                {/* HEADER BLOG */}
                <Header />
                <div className="blog__pages_area">
                <Container>
                    <Row>
                        <Col sm={12} md={4} lg={4}>
                            <div className="post">
                                <div className="post-image">
                                    <img src={Images01} alt="blog images"></img>
                                <Link className="post-categories" to="">Photo</Link>
                                </div>
                                <div className="post-desc">
                                    <div className="post-meta">
                                        <ul className="list-inline">
                                            <li> <IoIosCalendar /> 23 Jan, 2019</li>
                                            <li> <IoIosPerson /> By ThemeHt</li>
                                        </ul>
                                    </div>
                                    <div className="post-title">
                                        <h4>Softino Performance Based Software</h4>
                                    </div>
                                    <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
                                    <Link to="" className="icon-btn mt-4"> <IoIosArrowForward /> </Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <div className="post">
                                <div className="post-image">
                                    <img src={Images01} alt="blog images"></img>
                                <Link className="post-categories" to="">Photo</Link>
                                </div>
                                <div className="post-desc">
                                    <div className="post-meta">
                                        <ul className="list-inline">
                                            <li> <IoIosCalendar /> 23 Jan, 2019</li>
                                            <li> <IoIosPerson /> By ThemeHt</li>
                                        </ul>
                                    </div>
                                    <div className="post-title">
                                        <h4>Softino Performance Based Software</h4>
                                    </div>
                                    <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
                                    <Link to="" className="icon-btn mt-4"> <IoIosArrowForward /> </Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <div className="post">
                                <div className="post-image">
                                    <img src={Images01} alt="blog images"></img>
                                <Link className="post-categories" to="">Photo</Link>
                                </div>
                                <div className="post-desc">
                                    <div className="post-meta">
                                        <ul className="list-inline">
                                            <li> <IoIosCalendar /> 23 Jan, 2019</li>
                                            <li> <IoIosPerson /> By ThemeHt</li>
                                        </ul>
                                    </div>
                                    <div className="post-title">
                                        <h4>Softino Performance Based Software</h4>
                                    </div>
                                    <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
                                    <Link to="" className="icon-btn mt-4"> <IoIosArrowForward /> </Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <div className="post">
                                <div className="post-image">
                                    <img src={Images01} alt="blog images"></img>
                                <Link className="post-categories" to="">Photo</Link>
                                </div>
                                <div className="post-desc">
                                    <div className="post-meta">
                                        <ul className="list-inline">
                                            <li> <IoIosCalendar /> 23 Jan, 2019</li>
                                            <li> <IoIosPerson /> By ThemeHt</li>
                                        </ul>
                                    </div>
                                    <div className="post-title">
                                        <h4>Softino Performance Based Software</h4>
                                    </div>
                                    <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
                                    <Link to="" className="icon-btn mt-4"> <IoIosArrowForward /> </Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <div className="post">
                                <div className="post-image">
                                    <img src={Images01} alt="blog images"></img>
                                <Link className="post-categories" to="">Photo</Link>
                                </div>
                                <div className="post-desc">
                                    <div className="post-meta">
                                        <ul className="list-inline">
                                            <li> <IoIosCalendar /> 23 Jan, 2019</li>
                                            <li> <IoIosPerson /> By ThemeHt</li>
                                        </ul>
                                    </div>
                                    <div className="post-title">
                                        <h4>Softino Performance Based Software</h4>
                                    </div>
                                    <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
                                    <Link to="" className="icon-btn mt-4"> <IoIosArrowForward /> </Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <div className="post">
                                <div className="post-image">
                                    <img src={Images01} alt="blog images"></img>
                                <Link className="post-categories" to="">Photo</Link>
                                </div>
                                <div className="post-desc">
                                    <div className="post-meta">
                                        <ul className="list-inline">
                                            <li> <IoIosCalendar /> 23 Jan, 2019</li>
                                            <li> <IoIosPerson /> By ThemeHt</li>
                                        </ul>
                                    </div>
                                    <div className="post-title">
                                        <h4>Softino Performance Based Software</h4>
                                    </div>
                                    <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis…</p>
                                    <Link to="" className="icon-btn mt-4"> <IoIosArrowForward /> </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
                {/* Footer Area  */}
                <Footer />
            </div>
        );
    }
}

export default Blog;