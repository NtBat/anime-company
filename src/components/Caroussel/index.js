import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import Slider from "react-slick";

import Link from "next/link";
import styles from "./Caroussel.module.scss";

export default function Caroussel({ featured, upcoming, animes }) {
  var settings = {
    dots: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.title}>Trending</span>

        <Slider {...settings} className={styles.list}>
          {featured.map((anime, key) => (
            <Link href={`/anime/${anime.id}`} key={key}>
              <a className={styles.box}>
                <img
                  alt={anime.attributes.slug}
                  src={anime.attributes.posterImage.medium}
                />
              </a>
            </Link>
          ))}
        </Slider>
      </div>

      <div className={styles.wrapper}>
        <span className={styles.title}>Upcoming</span>

        <Slider {...settings} className={styles.list}>
          {upcoming.map((anime, key) => (
            <Link href={`/anime/${anime.id}`} key={key}>
              <a className={styles.box}>
                <img
                  alt={anime.attributes.slug}
                  src={anime.attributes.posterImage.medium}
                />
              </a>
            </Link>
          ))}
        </Slider>
      </div>

      <div className={styles.wrapper}>
        <span className={styles.title}>Animes</span>

        <Slider {...settings} className={styles.list}>
          {animes.map((anime, key) => (
            <Link href={`/anime/${anime.id}`} key={key}>
              <a className={styles.box}>
                <img
                  alt={anime.attributes.slug}
                  src={anime.attributes.posterImage.medium}
                />
              </a>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
}
