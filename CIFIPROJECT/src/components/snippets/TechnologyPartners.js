import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';

import TPlogo1 from '../../assets/images/tp-logo1.png';
import TPlogo2 from '../../assets/images/tp-logo2.png';
import TPlogo3 from '../../assets/images/tp-logo3.png';
import TPlogo4 from '../../assets/images/tp-logo4.png';
import TPlogo5 from '../../assets/images/tp-logo5.png';
import TPlogo6 from '../../assets/images/tp-logo6.png';
import TPlogo7 from '../../assets/images/tp-logo7.png';
import TPlogo8 from '../../assets/images/tp-logo8.png';

function TechnologyPartners() {
    return (
        <div className="mb-150">
            <Container>
                <div className="text-center mb-5 text-uppercase d-flex justify-content-center">
                    <div className=" border-title">
                        <h2 className="text-grad">technology partners</h2>
                    </div>
                </div>

                <Row className="d-none d-md-flex">
                    <Col md={4} lg={3} className="mb-5">
                        <div className="tp-member text-center">
                            <img src={TPlogo1} className="img-fluid" alt="member" />
                            <p>The world’s #1 esports company and the biggest tournament organizer</p>
                        </div>
                    </Col>
                    <Col md={4} lg={3} className="mb-5">
                        <div className="tp-member text-center">
                            <img src={TPlogo2} className="img-fluid" alt="member" />
                            <p>The world’s #1 esports company and the biggest tournament organizer</p>
                        </div>
                    </Col>
                    <Col md={4} lg={3} className="mb-5">
                        <div className="tp-member text-center">
                            <img src={TPlogo3} className="img-fluid" alt="member" />
                            <p>The world’s #1 esports company and the biggest tournament organizer</p>
                        </div>
                    </Col>
                    <Col md={4} lg={3} className="mb-5">
                        <div className="tp-member text-center">
                            <img src={TPlogo4} className="img-fluid" alt="member" />
                            <p>The world’s #1 esports company and the biggest tournament organizer</p>
                        </div>
                    </Col>
                    <Col md={4} lg={3} className="mb-5">
                        <div className="tp-member text-center">
                            <img src={TPlogo5} className="img-fluid" alt="member" />
                            <p>The world’s #1 esports company and the biggest tournament organizer</p>
                        </div>
                    </Col>
                    <Col md={4} lg={3} className="mb-5">
                        <div className="tp-member text-center">
                            <img src={TPlogo6} className="img-fluid" alt="member" />
                            <p>The world’s #1 esports company and the biggest tournament organizer</p>
                        </div>
                    </Col>
                    <Col md={4} lg={3} className="mb-5">
                        <div className="tp-member text-center">
                            <img src={TPlogo7} className="img-fluid" alt="member" />
                            <p>The world’s #1 esports company and the biggest tournament organizer</p>
                        </div>
                    </Col>
                    <Col md={4} lg={3} className="mb-5">
                        <div className="tp-member text-center">
                            <img src={TPlogo8} className="img-fluid" alt="member" />
                            <p>The world’s #1 esports company and the biggest tournament organizer</p>
                        </div>
                    </Col>
                </Row>

                <Carousel className="d-md-none" controls={false}>
                    <Carousel.Item>
                        <Row>
                            <Col xs={6}>
                                <div className="tp-member text-center">
                                    <img src={TPlogo1} className="img-fluid" alt="member" />
                                    <p>The world’s #1 esports company and the biggest tournament organizer</p>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="tp-member text-center">
                                    <img src={TPlogo2} className="img-fluid" alt="member" />
                                    <p>The world’s #1 esports company and the biggest tournament organizer</p>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col xs={6}>
                                <div className="tp-member text-center">
                                    <img src={TPlogo3} className="img-fluid" alt="member" />
                                    <p>The world’s #1 esports company and the biggest tournament organizer</p>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="tp-member text-center">
                                    <img src={TPlogo4} className="img-fluid" alt="member" />
                                    <p>The world’s #1 esports company and the biggest tournament organizer</p>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col xs={6}>
                                <div className="tp-member text-center">
                                    <img src={TPlogo5} className="img-fluid" alt="member" />
                                    <p>The world’s #1 esports company and the biggest tournament organizer</p>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="tp-member text-center">
                                    <img src={TPlogo6} className="img-fluid" alt="member" />
                                    <p>The world’s #1 esports company and the biggest tournament organizer</p>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col xs={6}>
                                <div className="tp-member text-center">
                                    <img src={TPlogo7} className="img-fluid" alt="member" />
                                    <p>The world’s #1 esports company and the biggest tournament organizer</p>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="tp-member text-center">
                                    <img src={TPlogo8} className="img-fluid" alt="member" />
                                    <p>The world’s #1 esports company and the biggest tournament organizer</p>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default TechnologyPartners;