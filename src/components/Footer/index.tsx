import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.flex}>
          <div className={styles.section}>
            <h2>Hei</h2>
            <p>
              Hei på deg tiddelibom. Hei på deg tiddelibomHei på deg
              tiddelibomHei på deg tiddelibomHei på deg tiddelibom
            </p>
          </div>
          <div className={styles.section}>
            <h2>Hei</h2>
            <p>
              Hei på deg tiddelibomHei på deg tiddelibomHei på deg tiddelibomHei
              på deg tiddelibomHei på deg tiddelibom
            </p>
          </div>
          <div className={styles.section}>
            <h2>Hei</h2>
            <p>
              Hei på deg tiddelibomHei på deg tiddelibomHei på deg tiddelibomHei
              på deg tiddelibomHei på deg tiddelibomHei på deg tiddelibom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
