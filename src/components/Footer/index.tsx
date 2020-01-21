import React, { FC } from "react";
import styles from "./Footer.module.css";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import cx from "classnames";


const Footer: FC<{}> = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <h2>HILFLING</h2>
          <p>
            Velkommen til Hilfling. Hilfling er fotogjengen sin nettside. Siden
            er open source, så om du er interessert i å vite hvordan siden
            fungerer, eller ønsker å rapportere bugs må du gjerne gjøre det her.
          </p>

          <a
            href="https://github.com/Fotogjengen/hilfling-frontend/"
            target="_blank"
          >
            HILFLING-FRONTEND
          </a>
          <br />
          <a
            href="https://github.com/Fotogjengen/hilfling-photo-backend"
            target="_blank"
          >
            HILFLING-PHOTO-BACKEND
          </a>
        </div>
        <div className={styles.section}>
          <h2>FØLG OSS </h2>
          <div className={styles.follow}>
            <Facebook />
            <p className={styles.media}>facebook</p>
          </div>
          <div className={styles.follow}>
            <Instagram />
            <p className={styles.media}>instagram</p>
          </div>
        </div>
        <div className={styles.section}>
          <h2>FOTOGJENGEN</h2>
          <p>
            Fotogjengen er en gjeng ved Studentersamfundet i Trondhjem. Vi har
            som oppgave å ta bilder av alt som skjer på Samfundet, under UKA og
            under ISFiT. Vi består av 15 funksjonærer. På denne siden finner du
            informasjon om oss og hvilke tjenester vi tilbyr.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
