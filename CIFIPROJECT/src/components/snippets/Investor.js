import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';

import KHMember from '../../assets/images/invester-image.png';

function Investor() {
    return (
        <div className="mb-150">
            <Container>
                <div className="text-center mb-5 text-uppercase d-flex justify-content-center">
                    <div className=" border-title">
                        <h2 className="text-grad">Investors</h2>
                    </div>
                </div>

                <Carousel className="text-lg-start text-center">
                    <Carousel.Item>
                        <Row className="investor-slide align-items-center">
                            <Col lg={5} className="mb-lg-0 mb-4">
                                <img src={KHMember} alt="investor" className="img-fluid mx-auto" />
                            </Col>
                            <Col lg={7}>
                                <h3>Lorem Agency</h3>
                                <h4>Mangrove Capital Partners</h4>
                                <p>Venture capital and private equity firm focused on early and expansion stage investment rounds, mid ve</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="investor-slide align-items-center">
                            <Col lg={5} className="mb-lg-0 mb-4">
                                <img src={KHMember} alt="investor" className="img-fluid mx-auto" />
                            </Col>
                            <Col lg={7}>
                                <h3>Lorem Agency</h3>
                                <h4>Mangrove Capital Partners</h4>
                                <p>Venture capital and private equity firm focused on early and expansion stage investment rounds, mid ve</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="investor-slide align-items-center">
                            <Col lg={5} className="mb-lg-0 mb-4">
                                <img src={KHMember} alt="investor" className="img-fluid mx-auto" />
                            </Col>
                            <Col lg={7}>
                                <h3>Lorem Agency</h3>
                                <h4>Mangrove Capital Partners</h4>
                                <p>Venture capital and private equity firm focused on early and expansion stage investment rounds, mid ve</p>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default Investor;