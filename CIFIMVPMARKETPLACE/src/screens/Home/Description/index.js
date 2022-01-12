import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import Image from "../../../components/Image";

const Description = () => {
  return (
    
    <div className={cn("section-bg", styles.section)}>    
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.stage}>SAVE YOUR TIME WITH ELEMENT-NFT</div>
          <h1 className={cn("h1", styles.title)}>
            {/* Cifi Token with Cifi-labs */}
            CREATIVE ECONOMY WITH
            CIFI-NFT NETWORK
          </h1>
          <div className={styles.text}>
            {/* A creative agency that lead and inspire */}
            A crypto infrastructure platform to lead and inspire cricket enthusiasts
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/upload-variants">
              Create item
            </Link>
            <Link className={cn("button-stroke", styles.button)} to="/search01">
              Discover more
            </Link>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/cubes@2x.png 2x"
              srcSetDark="/images/content/cubes-dark@2x.png 2x"
              src="/images/content/cubes.png"
              srcDark="/images/content/cubes-dark.png"
              alt="Cubes"
            />
          </div>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/cube@2x.png 2x"
              srcSetDark="/images/content/cube-dark@2x.png 2x"
              src="/images/content/cube.png"
              srcDark="/images/content/cube-dark.png"
              alt="Cube"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
