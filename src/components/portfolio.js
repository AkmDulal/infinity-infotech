import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos'; 

// IMAGES
import Images01 from "../images/portfolio/p_1.jpg";
import Images02 from "../images/portfolio/p_2.jpg";
import Images03 from "../images/portfolio/p_3.jpg";
// Components
import PortfolioLoader from "../components/portfolioLoader";

class portfolio extends Component {
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
    };
    render() {
        if (this.state.loading) return <PortfolioLoader />;
        return (
            <div>
                <div className="protfolio_area">

                    <div className="team_header">
                        <h5> <span className="aux-head-before"> Our </span> Portfolio </h5>
                        <h3>See Our Some Work </h3>
                        <p> All types of businesses need access to development resources, so we give you the option to decide <br></br> how much you need to use. </p>
                    </div>

                    <div className="tabs">
                        <Container>
                        <Tabs>
                            <Tab label="IT Consultancy">
                                <div>
                                    <Row>
                                        <Col sm={12} md={3} lg={3}>
                                            <div data-aos="fade-up-right" className="protfileo_tab">
                                                <img src={Images01} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div data-aos="fade-up-right" className="protfileo_tab">
                                                <img src={Images02} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div data-aos="fade-up-right" className="protfileo_tab">
                                                <img src={Images03} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div data-aos="fade-up-right" className="protfileo_tab">
                                                <img src={Images01} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>
                            <Tab label="UX Design">
                                <div>
                                <Row>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images01} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images03} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images02} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images01} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>
                            <Tab label="Core Software">
                                <div>
                                <Row>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images01} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images02} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images03} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images01} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>
                            <Tab label="Web Development">
                                <div>
                                <Row>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images01} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images03} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images02} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={3} lg={3}>
                                            <div className="protfileo_tab">
                                                <img src={Images01} alt="Images One"></img>
                                                <div className="protfileo_title">
                                                    <h3>Aaron Martin </h3>
                                                    <p>  Business contents insurance is a type of business insurance </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>
                        </Tabs>
                        </Container>
                    </div>

                </div>
            </div>
        );
    }
}




class Tabs extends React.Component {
    state = {
        activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {

        this.setState({ activeTab: tab });
    };
    render() {

        let content;
        let buttons = [];
        return (
            <div className="">
                {React.Children.map(this.props.children, child => {
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) content = child.props.children
                })}

                <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
                <div className="tab-content">{content}</div>

            </div>
        );
    }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {

    return (
        <div className="tab-buttons">
            {buttons.map(button => {
                return <button className={button === activeTab ? 'active' : ''} onClick={() => changeTab(button)}>{button}</button>
            })}
        </div>
    )
}

const Tab = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}


export default portfolio;