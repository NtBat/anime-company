import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import Slider from "react-slick";

import Link from "next/link";
import styles from "./Caroussel.module.scss";

export default function Caroussel({ title }) {
  var settings = {
    dots: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrow: true,
  };

  const [rows, setRows] = useState([]);

  useEffect(() => {
    function loadLocal() {
      const data = JSON.parse(localStorage.getItem("@anime-company/home"));

      if (data) {
        setRows(data.rows);
        return true;
      }

      return false;
    }

    async function fetch() {
      const trending = await api.getTrending();

      const rows = [
        {
          title: "Trending",
          animes: trending,
        },
        {
          title: "Upcoming",
          animes: await api.getUpcoming(),
        },
        {
          title: "Shonen",
          animes: await api.getByCategory("shounen"),
        },
        {
          title: "Isekai",
          animes: await api.getByCategory("isekai"),
        },
        {
          title: "Seinen",
          animes: await api.getByCategory("seinen"),
        },
        {
          title: "Mecha",
          animes: await api.getByCategory("mecha"),
        },
        {
          title: "Shoujo",
          animes: await api.getByCategory("shoujo"),
        },
        {
          title: "Josei",
          animes: await api.getByCategory("josei"),
        },
        {
          title: "Slice of Life",
          animes: await api.getByCategory("slice-of-life"),
        },
      ];

      localStorage.setItem(
        "@anime-comany/home",
        JSON.stringify({
          rows: rows,
        })
      );

      setRows(rows);
    }

    if (!loadLocal()) {
      fetch();
    }
  }, []);
  return (
    <>
      {rows.map((row, key) => (
        <div className={styles.wrapper} key={key}>
          <span className={styles.title}>{row.title}</span>

          <Slider {...settings} className={styles.list}>
            {row.animes.map((anime, key) => (
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
      ))}
    </>
  );
}
