import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Row, Col } from 'react-bootstrap';

class sliderLoader extends Component {
    render() {
        return (
            <div>
                <div className="services_l_efc_area slider__Effct">
                    <Container>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <div style={{ fontSize: 20, lineHeight: 2 }}>
                                    {this.props.body || <Skeleton count={1} />}
                                    <h5>{this.props.title || <Skeleton />}</h5>
                                    <h5>{this.props.title || <Skeleton />}</h5>
                                    {this.props.body || <Skeleton count={3} />}
                                    <Skeleton width={130} height={40} />
                                    <span className="services_l_efc_01">
                                        <Skeleton className="slider__e_r" width={100} height={40}  />
                                        <Skeleton className="slider__e_r" width={100} height={40}  />
                                        <Skeleton className="slider__e_r" width={100} height={40}  />
                                        <Skeleton className="slider__e_r" width={100} height={40}  />
                                    </span>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <div style={{ fontSize: 20, lineHeight: 2 }}>
                                    <Skeleton variant="rect" width={500} height={400} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default sliderLoader;