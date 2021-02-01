import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";

import api from "../../services/api";

import NextHead from "../../src/components/NextHead";
import styles from "../../styles/Anime.module.scss";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function Anime({ anime }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <NextHead title="Anime" />

      <Header />

      <main>
        <div className={styles.wrapper}>
          <img
            className={styles.banner}
            src={
              anime.attributes.coverImage?.original ||
              anime.attributes.posterImage.original
            }
            alt={anime.attributes.titles.en}
          />
          <div className={`container ${styles.text}`}>
            <h1>
              {anime.attributes.titles.en || anime.attributes.canonicalTitle}
            </h1>
            <p>{anime.attributes.description}</p>
            <span>{anime.attributes.episodeCount} episódios</span>
            <button onClick={() => setOpen(true)} className={styles.button}>
              <img
                src="/assets/img/play.svg"
                title="Play trailer"
                alt="Play Trailer"
              />
              Trailer
            </button>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={`${anime.attributes.youtubeVideoId}`}
          onClose={() => setOpen(false)}
        />
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
  const data = await res.json();

  return {
    props: {
      anime: data.data,
    },
  };
}
