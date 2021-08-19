import React from 'react';
import {Container} from 'react-bootstrap';

// asserts
import EcosystemImage from '../../assets/images/ecosystem-components.png';
import EcosystemIconBallot from '../../assets/images/ballot.png';
import EcosystemIconNest from '../../assets/images/nest-icon.png';
import EcosystemIconMang from '../../assets/images/mang-icon.png';
import EcosystemIconPulse from '../../assets/images/pulse-icon.png';
import EcosystemIconMinter from '../../assets/images/minter.png';
import EcosystemIconSquare from '../../assets/images/square-icon.png';
import EcosystemIconAppolo from '../../assets/images/appolo-icon.png';
import EcosystemIconShild from '../../assets/images/shield-icon.png';
import NFTImage from '../../assets/images/nft-cdc-image.png';

function ecosystemComponents() {
    return (
        <div className="ecosystem">
            <Container>
                <div className="text-center mb-4 text-uppercase d-flex justify-content-center">
                    <div className=" border-title">
                        <h2 className="text-grad">Ecosystem Components</h2>
                    </div>
                </div>

                <div className="ecosystem-components position-relative">
                    <img src={EcosystemImage} className="w-100 d-none d-lg-block" alt="ecosystem components" />
                    <div className="eco-item">
                        <div className="eco-item-icon">
                            <img src={EcosystemIconBallot} alt="icon" /> 
                            <h4>BALLOT</h4>
                        </div>
                        <p>Decentralized voting platform designed to facilitate league and club level elections</p>
                    </div>
                    {/* /.eco-item */}
                    <div className="eco-item">
                        <div className="eco-item-icon">
                            <img src={EcosystemIconNest} alt="icon" /> 
                            <h4>Nest</h4>
                        </div>
                        <p>Decentralized Stable Coin & Money Market Platform with No Liquidation and No Fees</p>
                    </div>
                    {/* /.eco-item */}
                    <div className="eco-item">
                        <div className="eco-item-icon">
                            <img src={EcosystemIconMang} alt="icon" /> 
                            <h4>Mang</h4>
                        </div>
                        <p>Decentralized AI based Prediction and social betting Engine to strategize game theories</p>
                    </div>
                    {/* /.eco-item */}
                    <div className="eco-item">
                        <div className="eco-item-icon">
                            <img src={EcosystemIconPulse} alt="icon" /> 
                            <h4>PULSE</h4>
                        </div>
                        <p>Decetralized PaaS with SDK and API Services for game developers to design and deploy cricket based Dapps</p>
                    </div>
                    {/* /.eco-item */}
                    <div className="eco-item">
                        <div className="eco-item-icon">
                            <img src={EcosystemIconMinter} alt="icon" /> 
                            <h4>Minter</h4>
                        </div>
                        <p>Decentralized Synthetic Fan Club Token Generation Platform</p>
                    </div>
                    {/* /.eco-item */}
                    <div className="eco-item">
                        <div className="eco-item-icon">
                            <img src={EcosystemIconSquare} alt="icon" /> 
                            <h4>Square</h4>
                        </div>
                        <p>Decentralized NFT marketplace to issue, stake, and trade digital cricket collectibles</p>
                    </div>
                    {/* /.eco-item */}
                    <div className="eco-item">
                        <div className="eco-item-icon">
                            <img src={EcosystemIconAppolo} alt="icon" /> 
                            <h4>APPOLO</h4>
                        </div>
                        <p>Decentralized Regulated cross-chain crowdfunding and AMM platform</p>
                    </div>
                    {/* /.eco-item */}
                    <div className="eco-item">
                        <div className="eco-item-icon">
                            <img src={EcosystemIconShild} alt="icon" /> 
                            <h4>SHIELD</h4>
                        </div>
                        <p>Decentralized NFT based KYC, Taxing and Compliance Layer powering CIFI components</p>
                    </div>
                    {/* /.eco-item */}
                </div>

                <div className="text-center mb-4 pb-md-2 text-uppercase">
                    <h2 className="text-grad">nft cricket digital collectibles</h2>
                    <h6>BUILD THE ROSTER OF YOUR DREAMS</h6>
                </div>
                
                <div className="text-center">
                    <p>A Novel platform for digital collectible cards that are provably rare and the games that use them. Unlike traditional collectibles like trophies and performer harcopies, these digital assets can be maintained in a mobile, transferred to anyone on the planet instantly, their authenticity can be proven, cannot be counterfeited or re-printed, and can be used in online games.</p>
                </div>
            </Container>
            <img src={NFTImage} alt="nft" className="nft-image w-100 d-block" />
        </div>
    );
}

export default ecosystemComponents;