import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Row, Col } from 'react-bootstrap';
class skeleton extends Component {
    render() {
        return (
            <div className="services_l_efc_area">
                <Container>
                    <Row>
                        <Col sm={12} md={5} lg={5}>
                            <div style={{ fontSize: 20, lineHeight: 2 }}>
                                <h1>{this.props.title || <Skeleton />}</h1>
                                {this.props.body || <Skeleton count={5} />}
                                <Skeleton width={50} className="services_l_efc" />
                                <span className="services_l_efc_01">
                                <Skeleton width={300}  />
                                </span>
                            </div>
                        </Col>
                        <Col sm={12} md={7} lg={7}>
                            <Row>
                                <Col sm={6} md={6} lg={6}>
                                    <div style={{ fontSize: 20, lineHeight: 2 }}>
                                        <Skeleton circle={true} height={50} width={50} />
                                        <h3>{this.props.title || <Skeleton />}</h3>
                                        {this.props.body || <Skeleton count={2} />}
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={6}>
                                    <div style={{ fontSize: 20, lineHeight: 2 }}>
                                        <Skeleton circle={true} height={50} width={50} />
                                        <h3>{this.props.title || <Skeleton />}</h3>
                                        {this.props.body || <Skeleton count={2} />}
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={6}>
                                    <div style={{ fontSize: 20, lineHeight: 2 }}>
                                        <Skeleton circle={true} height={50} width={50} />
                                        <h3>{this.props.title || <Skeleton />}</h3>
                                        {this.props.body || <Skeleton count={2} />}
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={6}>
                                    <div style={{ fontSize: 20, lineHeight: 2 }}>
                                        <Skeleton circle={true} height={50} width={50} />
                                        <h3>{this.props.title || <Skeleton />}</h3>
                                        {this.props.body || <Skeleton count={2} />}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default skeleton;