import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';

import KHMember from '../../assets/images/ab-kh-pic.png';
import DWMember from '../../assets/images/ab-dw-pic.png';
import MSMember from '../../assets/images/ab-ms-pic.png';

function AdvisorBoard() {
    return (
        <div className="mb-150">
            <Container>
                <div className="text-center mb-5 text-uppercase d-flex justify-content-center">
                    <div className=" border-title">
                        <h2 className="text-grad">Advisor board</h2>
                    </div>
                </div>

                <Row className="d-none d-md-flex">
                    <Col md={4}>
                        <div className="board-member d-flex flex-column align-items-center text-center">
                            <img src={KHMember} className="img-fluid" alt="member" />
                            <h3 className="text-grad">Kenneth Hsia</h3>
                            <h4>CO-FOUNDER</h4>
                            <p>Created one of the most successful and one of the most </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="board-member d-flex flex-column align-items-center text-center">
                            <img src={DWMember} className="img-fluid" alt="member" />
                            <h3 className="text-grad">Kenneth Hsia</h3>
                            <h4>CEO-FOUNDER</h4>
                            <p>Created one of the most successful and one of the most </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="board-member d-flex flex-column align-items-center text-center">
                            <img src={MSMember} className="img-fluid" alt="member" />
                            <h3 className="text-grad">Kenneth Hsia</h3>
                            <h4>CTO</h4>
                            <p>Created one of the most successful and one of the most </p>
                        </div>
                    </Col>
                </Row>

                <Carousel className="d-md-none" controls={false}>
                    <Carousel.Item>
                        <div className="board-member d-flex flex-column align-items-center text-center">
                            <img src={KHMember} className="img-fluid" alt="member" />
                            <h3 className="text-grad">Kenneth Hsia</h3>
                            <h4>CO-FOUNDER</h4>
                            <p>Created one of the most successful and one of the most </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="board-member d-flex flex-column align-items-center text-center">
                            <img src={DWMember} className="img-fluid" alt="member" />
                            <h3 className="text-grad">Kenneth Hsia</h3>
                            <h4>CEO-FOUNDER</h4>
                            <p>Created one of the most successful and one of the most </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="board-member d-flex flex-column align-items-center text-center">
                            <img src={MSMember} className="img-fluid" alt="member" />
                            <h3 className="text-grad">Kenneth Hsia</h3>
                            <h4>CTO</h4>
                            <p>Created one of the most successful and one of the most </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default AdvisorBoard;