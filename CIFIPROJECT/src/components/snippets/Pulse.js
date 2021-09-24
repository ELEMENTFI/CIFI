import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

// assets
import PulseDots from '../../assets/images/pulse-dots.png'
import PulseImage from '../../assets/images/pulse-image.png'
import Batsman from '../../assets/images/batsman.png'
import HardcapImage from '../../assets/images/hardcap-image.png'
import TMicon1 from '../../assets/images/tm-icon1.png'
import TMicon2 from '../../assets/images/tm-icon2.png'
import TMicon3 from '../../assets/images/tm-icon3.png'
import TMicon4 from '../../assets/images/tm-icon4.png'
import TMicon5 from '../../assets/images/tm-icon5.png'
import TMicon6 from '../../assets/images/tm-icon6.png'
import TMicon7 from '../../assets/images/tm-icon7.png'
import TMicon8 from '../../assets/images/tm-icon8.png'
import TMicon9 from '../../assets/images/tm-icon9.png'
import TMicon10 from '../../assets/images/tm-icon10.png'
import TMicon11 from '../../assets/images/tm-icon11.png'

function Pulse() {
    return (
        <div className="pulse-area">
            <img src={PulseDots} alt="pulse dots" className="pulse-dots d-none d-lg-block" />
            <Container>
                <Row className="mb-80 align-items-center">
                    <Col lg={6} sm={12} className="mb-lg-0 mb-4 text-center">
                        <img src={PulseImage} alt="pulse graph" className="img-fluid mx-auto" />
                    </Col>
                    <Col lg={6} sm={8} className="text-center m-lg-0 m-sm-auto text-lg-start">
                        <div className="mb-4 pt-1 section-title d-flex">
                            <div className=" border-title">
                                <h2 className="text-grad position-relative text-xl">PULSE <span className="text-shadow">PULSE</span></h2>
                            </div>
                        </div>
                        <p className="text-md">Decentralized Platform (Platform as a Service) with SDK and API support for coders to develop and host gaming Dapps</p>
                    </Col>
                </Row>

                <Row className="mb-80 justify-content-between align-items-center">
                    <Col lg={5} sm={12} className="mb-lg-0 mb-4 order-lg-2 text-center">
                        <img src={Batsman} alt="pulse graph" className="img-fluid mx-auto" />
                    </Col>
                    <Col lg={5} sm={8} className="text-center m-lg-0 m-sm-auto text-lg-start mb-lg-5">
                        <div className="mb-3 pt-1 text-uppercase mw-100 section-title d-flex">
                            <div className=" border-title">
                                <h2 className="text-grad">Be part of <br />the moment</h2>
                            </div>
                        </div>
                        <p>Host Club and League level player betting and Auctions Conduct Skipper and BOD elections for your club</p>
                        <Button href='#' className="btn-lg text-lowercase">Join Now</Button>
                    </Col>
                </Row>

                <Row className="align-items-center pt-xl-5 justify-content-between">
                    <Col xs={12} className="d-block mt-md-5 d-xl-none">
                        <div className="text-center mb-4 text-uppercase d-flex justify-content-center">
                            <div className=" border-title">
                                <h2 className="text-grad">token metrics</h2>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} className="mb-xl-0 mb-4 text-center">
                        <div className="hardcap position-relative">
                            <img src={HardcapImage} className="hardcap-dots" alt="hardcap" />
                            <div className="text-uppercase mw-100 section-title">
                                <h2 className="text-grad m-0 text-xl">$10M</h2>
                            </div>
                            <h5 className="text-uppercase">hardcap</h5>
                        </div>
                    </Col>
                    <Col xl={9} className="text-center text-xl-start mb-xl-5">
                        <Row className="justify-content-end d-none d-xl-flex row-token-title">
                            <Col lg={6}>
                                <div className="mb-3 ps-3 pt-1 text-uppercase mw-100 section-title d-flex">
                                    <h2 className="text-grad">token metrics</h2>
                                </div>
                            </Col>
                        </Row>
                        
                        <div className="token-meteics">
                            <div className="tm-item-outer">
                                <div className="tm-item d-flex align-items-start">
                                    <div className="tm-item-icon">
                                        <img src={TMicon1} className="img-fluid" alt="tm icon" />
                                    </div>
                                    <div className="tm-item-title">
                                        <h6>Family & Friends Round</h6>
                                        Vested for 270 days after TGE and 10% every 4 months
                                    </div>
                                    <div className="tm-details">
                                        $0.02/token <br />CIFI Tokens 10m <br />Allocation 3%
                                    </div>
                                </div>
                            </div>
                            {/* /.tm-item */}
                            <div className="tm-item-outer">
                                <div className="tm-item d-flex align-items-start">
                                    <div className="tm-item-icon">
                                        <img src={TMicon2} className="img-fluid" alt="tm icon" />
                                    </div>
                                    <div className="tm-item-title">
                                        <h6>Seed Round</h6>
                                        Vested for 180 days after TGE and 20% every 4 months
                                    </div>
                                    <div className="tm-details">
                                        $0.04/token <br />CIFI Tokens 45m <br />Allocation 15%
                                    </div>
                                </div>
                            </div>
                            {/* /.tm-item */}
                            <div className="tm-item-outer">
                                <div className="tm-item d-flex align-items-start">
                                    <div className="tm-item-icon">
                                        <img src={TMicon3} className="img-fluid" alt="tm icon" />
                                    </div>
                                    <div className="tm-item-title">
                                        <h6>Private Round</h6>
                                        Vested for 90 days after TGE  and 25% every 4 months
                                    </div>
                                    <div className="tm-details">
                                        $0.1/token <br />CIFI Tokens 60m <br />Allocation 20%
                                    </div>
                                </div>
                            </div>
                            {/* /.tm-item */}
                            <div className="tm-item-outer">
                                <div className="tm-item d-flex align-items-start">
                                    <div className="tm-item-icon">
                                        <img src={TMicon4} className="img-fluid" alt="tm icon" />
                                    </div>
                                    <div className="tm-item-title">
                                        <h6>IDO</h6>
                                        100% Unlocked
                                    </div>
                                    <div className="tm-details">
                                        $0.2/token <br />CIFI Tokens 10m <br />Allocation 3%
                                    </div>
                                </div>
                            </div>
                            {/* /.tm-item */}
                            <div className="tm-item-outer">
                                <div className="tm-item d-flex align-items-start">
                                    <div className="tm-item-icon">
                                        <img src={TMicon5} className="img-fluid" alt="tm icon" />
                                    </div>
                                    <div className="tm-item-title">
                                        <h6>Founders & Team</h6>
                                        Vested for 12 months after TGE and then 25% every year
                                    </div>
                                    <div className="tm-details">
                                        CIFI Tokens 45m <br />Allocation 15%
                                    </div>
                                </div>
                            </div>
                            {/* /.tm-item */}
                            <div className="tm-item-outer">
                                <div className="tm-item d-flex align-items-start">
                                    <div className="tm-item-icon">
                                        <img src={TMicon6} className="img-fluid" alt="tm icon" />
                                    </div>
                                    <div className="tm-item-title">
                                        <h6>Advisors</h6>
                                        Vested for 12 months after TGE and then 25% every year
                                    </div>
                                    <div className="tm-details">
                                        CIFI Tokens 2m <br />Allocation 1%
                                    </div>
                                </div>
                            </div>
                            {/* /.tm-item */}
                            <div className="tm-item-outer">
                                <div className="tm-item d-flex align-items-start">
                                    <div className="tm-item-icon">
                                        <img src={TMicon7} className="img-fluid" alt="tm icon" />
                                    </div>
                                    <div className="tm-item-title">
                                        <h6>Initial Liquidity</h6>
                                        Vested for 2 years and then 50% every year
                                    </div>
                                    <div className="tm-details">
                                        CIFI Tokens 3m <br />Allocation 1%
                                    </div>
                                </div>
                            </div>  
                            {/* /.tm-item */}
                            <div className="tm-item-outer">
                                <div className="tm-item d-flex align-items-start">
                                    <div className="tm-item-icon">
                                        <img src={TMicon8} className="img-fluid" alt="tm icon" />
                                    </div>
                                    <div className="tm-item-title">
                                        <h6>Community, Marketing, Listing & Support</h6>
                                    </div>
                                    <div className="tm-details">
                                        CIFI Tokens 10m <br />Allocation 3%
                                    </div>
                                </div>
                            </div>
                            {/* /.tm-item */}
                            <div className="tm-item-outer">
                                <div className="tm-item d-flex align-items-start">
                                    <div className="tm-item-icon">
                                        <img src={TMicon9} className="img-fluid" alt="tm icon" />
                                    </div>
                                    <div className="tm-item-title">
                                        <h6>Future Development</h6>
                                    </div>
                                    <div className="tm-details">
                                        CIFI Tokens 15m <br />Allocation 5%
                                    </div>
                                </div>
                            </div>
                            {/* /.tm-item */}
                            <div className="tm-item-outer">
                                <div className="tm-item d-flex align-items-start">
                                    <div className="tm-item-icon">
                                        <img src={TMicon10} className="img-fluid" alt="tm icon" />
                                    </div>
                                    <div className="tm-item-title">
                                        <h6>Yield Farming, Pilot & Ecosystem Mining</h6>
                                    </div>
                                    <div className="tm-details">
                                        CIFI Tokens 100m <br />Allocation 33%
                                    </div>
                                </div>
                            </div>
                            {/* /.tm-item */}
                            <div className="tm-item-outer">
                                <div className="tm-item d-flex align-items-start">
                                    <div className="tm-item-icon">
                                        <img src={TMicon11} className="img-fluid" alt="tm icon" />
                                    </div>
                                    <div className="tm-item-title">
                                        <h6>Total Supply</h6>
                                    </div>
                                    <div className="tm-details">
                                        300million
                                    </div>
                                </div>
                            </div>
                            {/* /.tm-item */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Pulse;