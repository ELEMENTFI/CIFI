import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Logo from '../assets/images/footerLogo.png';

import SMicon1 from '../assets/images/f-sm-1.png';
import SMicon2 from '../assets/images/f-sm-2.png';
import SMicon3 from '../assets/images/f-sm-3.png';
import SMicon4 from '../assets/images/f-sm-4.png';
import SMicon5 from '../assets/images/f-sm-5.png';
import SMicon6 from '../assets/images/f-sm-6.png';
import SMicon7 from '../assets/images/f-sm-7.png';
import SMicon8 from '../assets/images/f-sm-8.png';
import Flags from '../assets/images/flags.png';

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col lg={4} className="mb-lg-0 mb-5 pb-1">
                        <img src={Logo} alt="logo" className="img-fluid" />
                    </Col>
                    <Col lg={2} xs={6} className="mb-lg-0 mb-4 pb-1">
                        <ul className="list-unstyled text-uppercase">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">NFT Marketplace</a></li>
                            <li><a href="/">defi</a></li>
                            <li><a href="/">cricket 360</a></li>
                        </ul>
                    </Col>
                    <Col lg={2} xs={6} className="mb-lg-0 mb-4 pb-1">
                        <ul className="list-unstyled">
                            <li><a href="/">Community</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/">Support</a></li>
                            <li><a href="/">Sign In</a></li>
                        </ul>
                    </Col>
                    <Col lg={2} className="mb-lg-0 mb-4 pb-1">
                        <ul className="list-unstyled">
                            <li><a href="/">Terms & Conditions</a></li>
                            <li><a href="/">Policy</a></li>
                            <li><a href="/">Terms Conditions</a></li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <h6>Contact</h6>
                        <a href="mailto:info@bosonlabs.net">info@bosonlabs.net</a>
                    </Col>
                </Row>

                <div className="social-group text-center">
                    <ul className="d-flex list-unstyled align-items-center justify-content-center">
                        <li><a href="/"><img src={SMicon1} alt="icon" /></a></li>
                        <li><a href="/"><img src={SMicon2} alt="icon" /></a></li>
                        <li><a href="/"><img src={SMicon3} alt="icon" /></a></li>
                        <li><a href="/"><img src={SMicon4} alt="icon" /></a></li>
                        <li><a href="/"><img src={SMicon5} alt="icon" /></a></li>
                        <li><a href="/"><img src={SMicon6} alt="icon" /></a></li>
                        <li><a href="/"><img src={SMicon7} alt="icon" /></a></li>
                        <li><a href="/"><img src={SMicon8} alt="icon" /></a></li>
                    </ul>

                    <img src={Flags} alt="flags" className="img-fluid" />
                </div>
            </Container>

            <div className="copyright">
               &copy; 2021 CIFI Sports, All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;