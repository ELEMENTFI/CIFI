import React from "react";
import Hero from "./Hero";
import Selection from "./Selection";
import Popular from "./Popular";
import HotBid from "../../components/HotBid";
import Collections from "./Collections";
import Discover from "./Discover";
import Description from "./Description";
import Selectioncopy from "./Selectioncopy";
import TopCollections from "./TopCollections";
import Liveauctions from "./Liveauctions";

const Home = () => {
  return (
    <>    
      {/* <Hero /> */}
      <Selectioncopy />
      <TopCollections />
      {/* <Selection /> */}
      <Popular />
      {/* <HotBid classSection="section" /> */}
      <Collections />
      <Liveauctions />
      {/* <PopularCopy />
      <PopularCopys /> */}
      <Discover />
      <Description />                
    </>
  );
};

export default Home;
