import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

// assets
import LandingBannerImage from '../../assets/images/landing-banner.png';

function LandingBanner() {
    return (
        <div className="position-relative">
            <img src={LandingBannerImage} className="w-100 d-block landing-banner-image" alt="banner" />

            <div className="landing-banner-content">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col md={10} lg={8}>
                            <div className="text-center mb-4 text-uppercase d-flex justify-content-center">
                                <div className=" border-title">
                                    <h2 className="text-grad">Digitize your favorite cricketing moments</h2>
                                </div>
                            </div>
                            <p>Experience cricket from never before by bringing traditional trophies to reality through NFT blockchain innovation</p>
                            <Button href="/" variant="secondary">START COLLECTING</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default LandingBanner;