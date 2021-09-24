import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

// assets
import PlayBG from '../../assets/images/playBG.png';
import TitleLineLeft from '../../assets/images/title-grad-left.png';
import TitleLineRight from '../../assets/images/title-grad-right.png';
import FlagsLeft from '../../assets/images/landing-play-leftFlags.png';
import FlagsRight from '../../assets/images/landing-play-rightFlags.png';
import FlagLeft from '../../assets/images/flagLeft.png';
import FlagRight from '../../assets/images/flagRight.png';

function LandingPlay() {
    return (
        <div className="landing-play text-center" style={{ backgroundImage: `url(${PlayBG})` }}>
            <Container>
                <div className="landing-play-title">
                    <span>Play</span>
                </div>
                <div className="landing-play-heading mb-4 w-100 justify-content-center align-items-center d-flex">
                    <img src={TitleLineLeft} className="img-fluid" alt="line" />
                    <div className=" border-title mx-md-4 mx-2">
                        <h2 className="text-grad">400 leagues</h2>
                    </div>
                    <img src={TitleLineRight} className="img-fluid" alt="line" />
                </div>
                <h6 className="mb-md-5 mb-4">Officially Licensed <br />New League Every Week</h6>

                <Button href="/" className="secondary-md d-none d-lg-inline-block" variant="secondary">Discover</Button>

                <Row className="text-center d-flex d-lg-none">
                    <Col xs={3}>
                        <img src={FlagLeft} alt="flag left" className="img-fluid" />
                    </Col>
                    <Col xs={6} className="px-0">
                        <Button href="/" className="secondary-md" variant="secondary">Discover</Button>
                    </Col>
                    <Col xs={3}>
                        <img src={FlagRight} alt="flag right" className="img-fluid" />
                    </Col>
                </Row>

                <img src={FlagsLeft} alt="flag" className="flags-left d-none d-lg-block" />
                <img src={FlagsRight} alt="flag" className="flags-right d-none d-lg-block" />
            </Container>
        </div>
    );
}

export default LandingPlay;