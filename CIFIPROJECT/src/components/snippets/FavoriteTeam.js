import React from 'react';
import {Container} from 'react-bootstrap';

// Central Division assets
import CDTeam1 from '../../assets/images/cd-tm-1.png'
import CDTeam2 from '../../assets/images/cd-tm-2.png'
import CDTeam3 from '../../assets/images/cd-tm-3.png'
import CDTeam4 from '../../assets/images/cd-tm-4.png'
import CDTeam5 from '../../assets/images/cd-tm-5.png'
import CDTeam6 from '../../assets/images/cd-tm-6.png'
import CDTeam7 from '../../assets/images/cd-tm-7.png'

// Western Division assets
import WDTeam1 from '../../assets/images/wd-tm-1.png'
import WDTeam2 from '../../assets/images/wd-tm-2.png'
import WDTeam3 from '../../assets/images/wd-tm-3.png'
import WDTeam4 from '../../assets/images/wd-tm-4.png'
import WDTeam5 from '../../assets/images/wd-tm-5.png'
import WDTeam6 from '../../assets/images/wd-tm-6.png'
import WDTeam7 from '../../assets/images/wd-tm-7.png'

// Southern Division assets
import SDTeam1 from '../../assets/images/sd-tm-1.png'
import SDTeam2 from '../../assets/images/sd-tm-2.png'
import SDTeam3 from '../../assets/images/sd-tm-3.png'
import SDTeam4 from '../../assets/images/sd-tm-4.png'
import SDTeam5 from '../../assets/images/sd-tm-5.png'
import SDTeam6 from '../../assets/images/sd-tm-6.png'

// Eastern Division assets
import EDTeam1 from '../../assets/images/ed-tm-1.png'
import EDTeam2 from '../../assets/images/ed-tm-2.png'
import EDTeam3 from '../../assets/images/ed-tm-3.png'
import EDTeam4 from '../../assets/images/ed-tm-4.png'
import EDTeam5 from '../../assets/images/ed-tm-5.png'
import EDTeam6 from '../../assets/images/ed-tm-6.png'
import EDTeam7 from '../../assets/images/ed-tm-7.png'

function FavoriteTeam() {
    return (
        <div className="favorite-area text-center">
            <Container>
                <div className="text-center mb-5 text-uppercase d-flex justify-content-center">
                    <div className=" border-title">
                        <h2 className="text-grad">Select and follow your favorite team</h2>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="team-header overflow-hidden">
                        <span>Central Division</span>
                    </div>

                    <div className="team-list">
                        <a href="/"><span><img src={CDTeam1} alt="logo" /></span></a>
                        <a href="/"><span><img src={CDTeam2} alt="logo" /></span></a>
                        <a href="/"><span><img src={CDTeam3} alt="logo" /></span></a>
                        <a href="/"><span><img src={CDTeam4} alt="logo" /></span></a>
                        <a href="/"><span><img src={CDTeam5} alt="logo" /></span></a>
                        <a href="/"><span><img src={CDTeam6} alt="logo" /></span></a>
                        <a href="/"><span><img src={CDTeam7} alt="logo" /></span></a>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="team-header overflow-hidden">
                        <span>Western Division</span>
                    </div>

                    <div className="team-list">
                        <a href="/"><span><img src={WDTeam1} alt="logo" /></span></a>
                        <a href="/"><span><img src={WDTeam2} alt="logo" /></span></a>
                        <a href="/"><span><img src={WDTeam3} alt="logo" /></span></a>
                        <a href="/"><span><img src={WDTeam4} alt="logo" /></span></a>
                        <a href="/"><span><img src={WDTeam5} alt="logo" /></span></a>
                        <a href="/"><span><img src={WDTeam6} alt="logo" /></span></a>
                        <a href="/"><span><img src={WDTeam7} alt="logo" /></span></a>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="team-header overflow-hidden">
                        <span>Southern Division</span>
                    </div>

                    <div className="team-list">
                        <a href="/"><span><img src={SDTeam1} alt="logo" /></span></a>
                        <a href="/"><span><img src={SDTeam2} alt="logo" /></span></a>
                        <a href="/"><span><img src={SDTeam3} alt="logo" /></span></a>
                        <a href="/"><span><img src={SDTeam4} alt="logo" /></span></a>
                        <a href="/"><span><img src={SDTeam5} alt="logo" /></span></a>
                        <a href="/"><span><img src={SDTeam6} alt="logo" /></span></a>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="team-header overflow-hidden">
                        <span>Eastern Division</span>
                    </div>

                    <div className="team-list">
                        <a href="/"><span><img src={EDTeam1} alt="logo" /></span></a>
                        <a href="/"><span><img src={EDTeam2} alt="logo" /></span></a>
                        <a href="/"><span><img src={EDTeam3} alt="logo" /></span></a>
                        <a href="/"><span><img src={EDTeam4} alt="logo" /></span></a>
                        <a href="/"><span><img src={EDTeam5} alt="logo" /></span></a>
                        <a href="/"><span><img src={EDTeam6} alt="logo" /></span></a>
                        <a href="/"><span><img src={EDTeam7} alt="logo" /></span></a>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default FavoriteTeam;