import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Row, Col } from 'react-bootstrap';

class aboutLoader extends Component {
    render() {
        return (
            <div>
                <div className="services_l_efc_area">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div style={{ fontSize: 20, lineHeight: 2 }}>
                                <Skeleton variant="rect" width={500} height={400} />
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div style={{ fontSize: 20, lineHeight: 2 }}>
                                <h1>{this.props.title || <Skeleton />}</h1>
                                {this.props.body || <Skeleton count={5} />}
                                <Skeleton width={130} height={60} className="about_l_efc" />
                                <Skeleton width={130} height={60} />
                                <span className="services_l_efc_01">
                                <Skeleton width={300}  />
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        );
    }
}

export default aboutLoader;