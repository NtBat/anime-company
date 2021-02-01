import React, { useState, useEffect } from "react";
import api from "../../../services/api";

import styles from "./featured.module.scss";

export default function Featured() {
  const [test, setTest] = useState([]);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    function loadLocal() {
      const data = JSON.parse(localStorage.getItem("@animeflix/home"));

      if (data) {
        setFeatured(data.featured);
        return true;
      }

      return false;
    }

    async function fetch() {
      const trending = await api.getTrending();
      const featured = trending[Math.floor(Math.random() * trending.length)];

      localStorage.setItem(
        "@animecompany/home",
        JSON.stringify({
          featured: featured,
        })
      );
      setFeatured(featured);
    }

    if (!loadLocal()) {
      fetch();
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {featured != null ? (
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${featured.attributes.coverImage.original})`,
          }}
        >
          <div className={styles.text}>
            <h1>
              {featured.attributes.canonicalTitle || anime.attributes.titles.en}
            </h1>
            <div className={styles.button}>
              <button className={styles.trailer}>
                <img
                  src="/assets/img/play.svg"
                  title="Play trailer"
                  alt="Play Trailer"
                />
                Trailer
              </button>
              <button className={styles.info}>
                <img src="/assets/img/info.svg" title="Infos" alt="Infos" />
                Informações
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.wrapperLoading}>
          <div className={styles.loading}>
            <div className={`${styles.circle} ${styles.circle1}`}></div>
            <div className={`${styles.circle} ${styles.circle2}`}></div>
            <div className={`${styles.circle} ${styles.circle3}`}></div>
            <div className={`${styles.circle} ${styles.circle4}`}></div>
            <div className={`${styles.circle} ${styles.circle5}`}></div>
          </div>
        </div>
      )}
    </div>
  );
}
