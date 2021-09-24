import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Member from './TeamMember';

// assets
import TeamMember1 from '../../assets/images/tm-hr.png';
import TeamMember2 from '../../assets/images/tm-mp.png';
import TeamMember3 from '../../assets/images/tm-am.png';
import TeamMember4 from '../../assets/images/tm-pr.png';
import TeamMember5 from '../../assets/images/tm-mg.png';
import TeamMember6 from '../../assets/images/tm-bj.png';
import TeamMember7 from '../../assets/images/tm-ab.png';
import TeamMember8 from '../../assets/images/tm-te.png';
import TeamMember9 from '../../assets/images/tm-mhh.png';
import TeamMember10 from '../../assets/images/tm-hi.png';
import TeamMember11 from '../../assets/images/tm-dummy.png';
import TeamArc from '../../assets/images/team-arc.png';

function Team() {
    return (
        <div className="team-area">
            <Container>
                <div className="text-center mb-5 pb-md-4 text-uppercase d-flex justify-content-center">
                    <div className=" border-title">
                        <h2 className="text-grad">Team</h2>
                    </div>
                </div>

                <Row>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember1} Name="HEMADRI RAJU​" Designation="Technical Director" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember2} Name="MARS PANNEER​" Designation="Product Director" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember3} Name="AMACHANDRAN" Designation="Solidity Senior Developer" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember4} Name="PRABHAKARAN" Designation="Lead, Blockchain Development" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember5} Name="MARTINA GRACY" Designation="Solidity Senior Developer" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember6} Name="BHUVANESWARI J" Designation="Web Developer" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember7} Name="AJAY B" Designation="Web Developer" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember8} Name="THIRUMURUGAN E" Designation="Blockchain Developer" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember9} Name="MOHAMED HARISH HAMEED" Designation="Blockchain Developer" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember10} Name="HARI IRULAPPAN" Designation="Blockchain Architect" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember11} Name="Swethan Srinivasan" Designation="Director - Vendor Relations" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                    <Col xs={6} md={4} lg={3} className="mb-5">
                        <Member Avatar={TeamMember11} Name="Lakshmi Manoharan" Designation="Director - Human Resources" LinkedIn="http://www.linkedin.com/" />
                    </Col>
                </Row>
            </Container>
            <img src={TeamArc} alt="team arc" className="team-arc w-100 d-block" />
        </div>
    );
}

export default Team;