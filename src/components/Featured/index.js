import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

import styles from "./featured.module.scss";

export default function Featured({ featured }) {
  const MAX_LENGTH = 160;

  const [isOpen, setOpen] = useState(false);
  const newFeatured = featured[Math.floor(Math.random() * featured.length)];

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.image}
        style={{
          background: `
          linear-gradient(90deg, #141414 30%, transparent 70%), 
          linear-gradient(0deg, #141414 1%, transparent 99%),
          url(${newFeatured.attributes.coverImage.original})`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles.text}>
          <div className={styles.title}>
            <h1>
              {newFeatured.attributes.canonicalTitle ||
                anime.attributes.titles.en}
            </h1>
          </div>
          <div className={styles.description}>
            <p>
              {`${newFeatured.attributes.description.substring(
                0,
                MAX_LENGTH
              )}[...]`}
            </p>
          </div>
          <div className={styles.buttons}>
            <button
              className={`${styles.trailer} ${styles.button}`}
              onClick={() => setOpen(true)}
            >
              <img
                src="/assets/img/play.svg"
                title="Play trailer"
                alt="Play Trailer"
              />
              Assistir Trailer
            </button>
            <Link href={`/anime/${newFeatured.id}`}>
              <a className={`${styles.info} ${styles.button}`}>
                <img src="/assets/img/info.svg" title="Infos" alt="Infos" />
                Informações
              </a>
            </Link>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={`${newFeatured.attributes.youtubeVideoId}`}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}
