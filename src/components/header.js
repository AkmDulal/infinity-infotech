import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//Link
import { Link } from "react-router-dom";
// images
import logo from "../images/logo/logo.png";
// Icon
import { IoMdInformation } from "react-icons/io";

const navslide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });

    burger.classList.toggle("toggle");
};

class header extends Component {
    constructor(){
        super();
        this.state = {
            scrolled: false,
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if(isTop !== true){
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false })
            }
        });
    }
   
    render() {
        return (
            <div>
                <div className="top_header">
                    <Container>
                        <Row>
                            <Col sm={3} md={8} lg={8}>
                                <div className="header_top_left">
                                    <h6> 
                                        {/* <IoMdPerson className="header_top_icon" />  */}
                                        <span> 
                                            <div className="title-effect title-effect-2">
                                                <div className="ellipse"></div>
                                                <IoMdInformation className="header__top_icon" />
                                            </div>
                                            Welcom to infinity infotech 
                                        </span>  
                                    </h6>
                                </div>
                            </Col>
                            <Col sm={9} md={4} lg={4}>
                                <div className="header_top_right">
                                    <Link to="" className="top_menu"> Docs </Link>
                                    <Link to="" className="top_menu"> Get Support </Link>
                                    <Link to="" className="top_menu"> Docs </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
                    <div className="header_nav_area">
                        <Container>
                        <nav>
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} alt="logo"></img>
                                </Link>
                            </div>
                            <ul className="nav-links">
                                <li className="manu_list active"><Link to="/">Home</Link></li>
                                <li className="manu_list"><Link to="/about">About</Link></li>
                                <li className="manu_list"><Link to="/services">Services</Link></li>
                                <li className="manu_list"><Link to="/team">Our Team</Link></li>
                                <li className="manu_list"><Link to="/portfolio">Portfolio</Link></li>
                                <li className="manu_list"><Link to="/blog">Blog</Link></li>
                                <li className="header_contact"><Link to="/contact">Contact</Link></li>
                            </ul>
                            <div className="burger" onClick={() => navslide()}>
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                        </nav>
                        </Container>
                    </div>
                </div>


            </div>
        );
    }
}

export default header;