import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

// assets
import BMDots from '../../assets/images/bm-dots.png'
import BMImage from '../../assets/images/bm-graph.png'
import BMTeam from '../../assets/images/bm-team.png'

function BuildManage() {
    return (
        <div className="build-manager">
            <img src={BMDots} alt="bm dots" className="bm-dots d-none d-lg-block" />
            <Container>
                <Row className="bm-top align-items-center">
                    <Col lg={6} className="mb-lg-0 mb-4 text-center">
                        <img src={BMImage} alt="bm graph" className="img-fluid mx-auto" />
                    </Col>
                    <Col lg={6} xl={5} className="text-center text-lg-start">
                        <h5 className="text-uppercase">THE FUTURE OF DEFI LENDING</h5>
                        <div className="mb-3 pt-1 section-title d-flex">
                            <div className=" border-title">
                                <h2 className="text-grad">Self Paying DEFI Leading Protocol</h2>
                            </div>
                        </div>
                        <p><strong>NEST</strong> is the De Fi platform for savings, lending, farming, fundraising, and sponsoring cricket talents and projects. No liquidations</p>
                        <Button href='#' className="btn-lg text-lowercase">Access the platform</Button>
                    </Col>
                </Row>

                <Row className="bm-bottom align-items-end">
                    <Col lg={6} className="mb-lg-0 mb-4 order-lg-2 text-center">
                        <img src={BMTeam} alt="bm graph" className="img-fluid bm-team mx-auto" />
                    </Col>
                    <Col lg={6} xl={5} className="text-center text-lg-start mb-lg-5">
                        <div className="mb-3 pt-1 text-uppercase mw-100 section-title d-flex">
                            <div className=" border-title">
                                <h2 className="text-grad">Build & manager your squad</h2>
                            </div>
                        </div>
                        <p>Build your own Fantasy Cricket Game and win NFT. Select your captain and earn points based on real-life performances.</p>
                        <Button href='#' className="btn-lg text-lowercase">Start Now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BuildManage;