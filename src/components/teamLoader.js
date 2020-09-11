import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Row, Col } from 'react-bootstrap';

class teamLoader extends Component {
    render() {
        return (
            <div>
                <div className="services_l_efc_area slider__Effct">
                    <Container>
                        <Row>
                            <Col sm={12} md={3} lg={3}>
                                <div style={{ fontSize: 20, lineHeight: 2 }}>
                                    <Skeleton variant="rect" width={300} height={400} />
                                </div>
                            </Col> 
                            <Col sm={12} md={3} lg={3}>
                                <div style={{ fontSize: 20, lineHeight: 2 }}>
                                    <Skeleton variant="rect" width={300} height={400} />
                                </div>
                            </Col> 
                            <Col sm={12} md={3} lg={3}>
                                <div style={{ fontSize: 20, lineHeight: 2 }}>
                                    <Skeleton variant="rect" width={300} height={400} />
                                </div>
                            </Col> 
                            <Col sm={12} md={3} lg={3}>
                                <div style={{ fontSize: 20, lineHeight: 2 }}>
                                    <Skeleton variant="rect" width={300} height={400} />
                                </div>
                            </Col> 
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default teamLoader;