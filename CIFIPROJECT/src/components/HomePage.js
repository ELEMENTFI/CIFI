import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

import Layout from './Layout';
// components
import EcosystemComponents from './snippets/ecosystemComponents';
import BuildManage from './snippets/BuildManage';
import Pulse from './snippets/Pulse';
import Team from './snippets/Team';
import AdvisorBoard from './snippets/AdvisorBoard';
import Investor from './snippets/Investor';
import TechnologyPartners from './snippets/TechnologyPartners';
import Roadmap from './snippets/Roadmap';
import Platform from './snippets/Platform';

// assets
import BannerImage from '../assets/images/gaming-market-image.png';
import BannerDots from '../assets/images/banner-dots.png';
import BMDots from '../assets/images/bm-dots.png'


function HomePage() {
    return (
        <Layout>
            <div className="page-banner">
                <img src={BannerDots} className="page-banner-dots d-none d-lg-block" alt="dots" />
                <Container>
                    <Row className="align-items-center">
                        <Col lg="6" className="order-lg-2">
                            <img src={BannerImage} className="img-fluid page-banner-image" alt="banner" />
                        </Col>
                        <Col lg="6">
                            <h1 className="text-uppercase">TOKENIZED ENTERPRISE GRADE <strong className="text-grad">crypto infrastructure <br />platform <span>FOR cricket</span></strong></h1>
                            <p>The first multi-dimensional All-in-one NFT and DEFI ecosystem that aligns the interests of cricketing community, ans, sponsors, clubs, players, teams, and rights-holders in one place.</p>
                            <Button href="#" size="lg">Join us now</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <EcosystemComponents />

            <BuildManage />

            <Pulse />

            <Team />

            <div className="board-sections overflow-hidden position-relative">
                <img src={BMDots} alt="dots" className="invester-dots d-none d-lg-block" />

                <AdvisorBoard />

                <Investor />

                <TechnologyPartners />

                <Roadmap />
            </div>
            
            <Platform />
        </Layout>
    );
}

export default HomePage;