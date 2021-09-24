import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

// assets
import LCIcon1 from '../../assets/images/lc-icon1.png';
import LCIcon2 from '../../assets/images/lc-icon2.png';
import LCIcon3 from '../../assets/images/lc-icon3.png';

function LandingCard() {
    return (
        <Container>
            <div className="landing-card text-center">
                <Row>
                    <Col sm={4} className="landing-card-item">
                        <img src={LCIcon1} alt="icon" />
                        <p>2D NFT Digital <br />Card Collectibles</p>
                    </Col>
                    <Col sm={4} className="landing-card-item">
                        <img src={LCIcon2} alt="icon" />
                        <p>3D NFT <br /> Video Collectibles</p>
                    </Col>
                    <Col sm={4} className="landing-card-item">
                        <img src={LCIcon3} alt="icon" />
                        <p>3D Voice Over <br />Collectibles</p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default LandingCard;