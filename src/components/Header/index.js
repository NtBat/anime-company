import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";

function Header() {
  const router = useRouter();

  const [menuBurger, setActiveMenuBurger] = useState(false);

  function handleBurger() {
    setActiveMenuBurger(!menuBurger);
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <a className={styles.linkLogo} href="/" title="AnimeCompany">
          <img
            className={styles.logo}
            src="/assets/img/logo.svg"
            alt="Logo AnimeCompany"
          />
        </a>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a className={`${router.pathname == "/" ? styles.active : ""}`}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/quem-somos">
                <a
                  className={`${
                    router.pathname == "/quem-somos" ? styles.active : ""
                  }`}
                >
                  Quem Somos
                </a>
              </Link>
            </li>

            <li>
              <Link href="/contato">
                <a
                  className={`${
                    router.pathname == "/contato" ? styles.active : ""
                  }`}
                >
                  Contato
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`${styles.menu} ${menuBurger && styles.menuActive}`}
          onClick={handleBurger}
        >
          <span className={`${styles.menuBurger} ${styles.menuTop}`}></span>
          <span className={`${styles.menuBurger} ${styles.menuMid}`}></span>
          <span className={`${styles.menuBurger} ${styles.menuBot}`}></span>
        </div>
      </div>

      <div className={`${styles.menuMobile} ${menuBurger && styles.active}`}>
        <div className={styles.btnClose} onClick={handleBurger}>
          X
        </div>
        <ul className="list">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Quem somos</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
