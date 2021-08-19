import React from 'react';
import {Container, Button} from 'react-bootstrap';

// assets
import Players from '../../assets/images/player-cards.png';

function LandingPlay() {
    return (
        <div className="player-area text-center">
            <div className="player-cards" style={{backgroundImage: `url(${Players})`}}>

            </div>

            <Container>
                <div className="text-center mb-4 d-flex justify-content-center">
                    <div className=" border-title">
                        <h2 className="text-grad">Your Legacy Starts Now</h2>
                    </div>
                </div>
                <p>Collect Your First Cards, Live The Game With Passion</p>
                <Button href="/" className="secondary-md" variant="secondary">Start Now</Button>
            </Container>
        </div>
    );
}

export default LandingPlay;