import React from 'react';
import {Container, Table} from 'react-bootstrap';

// assets
import Logo from '../../assets/images/logo.png';
import TopShot from '../../assets/images/top-shot-logo-horizontal-white.png';
import SorareLogo from '../../assets/images/sorare-logo.png';
import ToppsLogo from '../../assets/images/Topps_Logo.png';
import Check from '../../assets/images/check-icon.png';
import Cross from '../../assets/images/cross-icon.png';

function Platform() {
    return (
        <div className="platform pb-4">
            <Container>
                <div className="text-center mb-5 text-uppercase d-flex justify-content-center">
                    <div className=" border-title">
                        <h2 className="text-grad text-lg">comparison of different sport infrastructure platforms</h2>
                    </div>
                </div>

                <div className="platform-table">
                    <Table striped bordered responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Category</th>
                                <th><img src={Logo} alt="logo" /></th>
                                <th><img src={TopShot} alt="logo" /></th>
                                <th><img src={SorareLogo} alt="logo" /></th>
                                <th><img src={ToppsLogo} alt="logo" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={3}>NFT</td>
                                <td>Digital 2D</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Check} alt="check" /></td>
                            </tr>
                            <tr>
                                <td>Digital 3D</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                            </tr>
                            <tr>
                                <td>Voice NFT</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                            </tr>

                            <tr>
                                <td rowSpan={2}>DApps</td>
                                <td>Chrome extension</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                            </tr>
                            <tr>
                                <td>Wallet</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                            </tr>

                            <tr>
                                <td>Types of sport</td>
                                <td></td>
                                <td><strong>Cricket</strong></td>
                                <td><strong>Basketball</strong></td>
                                <td><strong>Soccer</strong></td>
                                <td><strong>Baseball</strong></td>
                            </tr>

                            <tr>
                                <td rowSpan={4}>Platform 360</td>
                                <td>Fantasy League</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                            </tr>
                            <tr>
                                <td>Social betting</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                            </tr>
                            <tr>
                                <td>Ballot DAO</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                            </tr>
                            <tr>
                                <td>Online Apps</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                            </tr>

                            <tr>
                                <td rowSpan={3}>DeFi</td>
                                <td>Self paying loans</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                            </tr>
                            <tr>
                                <td>Staking</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                            </tr>
                            <tr>
                                <td>Yield farming</td>
                                <td><img src={Check} alt="check" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                                <td><img src={Cross} alt="Cross" /></td>
                            </tr>

                            <tr>
                                <td rowSpan={3}>Infrastructure</td>
                                <td>Platform</td>
                                <td><strong>Algorand</strong></td>
                                <td><strong>Ethereum</strong></td>
                                <td><strong>Ethereum</strong></td>
                                <td><strong>Ethereum</strong></td>
                            </tr>
                            <tr>
                                <td>Tx speed per sec</td>
                                <td><strong>2000</strong></td>
                                <td><strong>10</strong></td>
                                <td><strong>10</strong></td>
                                <td><strong>10</strong></td>
                            </tr>
                            <tr>
                                <td>Avg. Cost per Tx</td>
                                <td><strong>0.01c</strong></td>
                                <td><strong>$10</strong></td>
                                <td><strong>$10</strong></td>
                                <td><strong>$10</strong></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                
            </Container>
        </div>
    );
}

export default Platform;