import React from 'react';

import Layout from './Layout';

// components
import Banner from './snippets/LandingBanner';
import LandingCard from './snippets/LandingCard';
import LandingPlay from './snippets/LandingPlay';
import PlayerCards from './snippets/PlayerCards';
import FavoriteTeam from './snippets/FavoriteTeam';



function Landing() {
    return (
        <Layout>
            <Banner />

            <LandingCard />

            <LandingPlay />

            <PlayerCards />

            <FavoriteTeam />
        </Layout>
    );
}

export default Landing;