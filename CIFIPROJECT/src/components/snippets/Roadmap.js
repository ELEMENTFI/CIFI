import React from 'react';
import {Container} from 'react-bootstrap';


function Roadmap() {
    return (
        <div className="mb-150">
            <Container>
                <div className="text-center mb-5 text-uppercase d-flex justify-content-center">
                    <div className=" border-title">
                        <h2 className="text-grad">Roadmap</h2>
                    </div>
                </div>

                <div className="roadmap-area w-100 d-lg-flex">
                    <div className="roadmap roadmap-red d-lg-flex">
                        <div className="roadmap-year">2021</div>
                        
                        <div className="roadmap-text">
                            <span>Q1</span>
                            <p>CIFI Whitepaper <br />Finalize Team Member</p>
                        </div>
                        <div className="roadmap-text">
                            <span>Q2</span>
                            <p>Finalize the development platform <br />Square NFT marketplace MVP <br />IPFS integration</p>
                        </div>
                        <div className="roadmap-text">
                            <span>Q3</span>
                            <p>TCL-CIFI NFT pilot <br />TCL contract agreement <br />Setup social platforms</p>
                        </div>
                        <div className="roadmap-text">
                            <span>Q4</span>
                            <p>2D, 3D and voice over <br />NFT Pilot <br />Dfinity partnership <br />IDO public sale <br />Token generation event</p>
                        </div>
                    </div>
                    <div className="roadmap roadmap-blue d-lg-flex">
                        <div className="roadmap-year">2022</div>

                        <div className="roadmap-text">
                            <span>Q1</span>
                            <p>Mobile App pilot <br />Square go live <br />Mang MVP <br />USACA pilot</p>
                        </div>
                        <div className="roadmap-text">
                            <span>Q2</span>
                            <p>CIFI SDK and API MVP pilot <br />Riveria MVP Pilot</p>
                        </div>
                        <div className="roadmap-text">
                            <span>Q3</span>
                            <p>NEST platform MVP  <br />MANG go live <br />RIVERIA go live</p>
                        </div>
                        <div className="roadmap-text">
                            <span>Q4</span>
                            <p>NEST platform V2 go live <br />Regulatory approvel <br />Code review <br />NEST talking</p>
                        </div>
                    </div>
                    <div className="roadmap roadmap-green d-lg-flex">
                        <div className="roadmap-year">2023</div>

                        <div className="roadmap-text">
                            <span>Q1</span>
                            <p>Nest Platform Go Live <br />Additional Marketing <br />CEX & DEX Listing</p>
                        </div>
                    </div>
                </div>
                
            </Container>
        </div>
    );
}

export default Roadmap;