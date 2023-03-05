import React, { useState } from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../logo.svg";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const linkClicked = () => {
    setSidebarOpen((prev) => false);
  };
  const scrollWithOffset = (e) => {
    const yCoordinate = e.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <header className={styles["nav-container"]}>
      <HashLink
        scroll={scrollWithOffset}
        to="/#"
        smooth
        className={styles["nav-logo"]}
      >
        <Logo />
      </HashLink>
      <button
        className={styles.sidebarToggle}
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <svg
          className={`${styles.sidebarIcon} ${
            sidebarOpen ? styles.sidebarIconChange : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <line
            x1="10"
            y1="24"
            x2="90"
            y2="24"
            stroke="white"
            strokeWidth={10}
          />
          <line
            x1="10"
            y1="50"
            x2="90"
            y2="50"
            stroke="white"
            strokeWidth={10}
          />
          <line
            x1="10"
            y1="76"
            x2="90"
            y2="76"
            stroke="white"
            strokeWidth={10}
          />
        </svg>
      </button>
      <div
        className={`${styles["nav-items"]} ${
          sidebarOpen && styles["nav-items-visible"]
        }`}
      >
        <HashLink
          scroll={scrollWithOffset}
          to="/#"
          onClick={linkClicked}
          smooth
          className={styles["nav-item"]}
        >
          Home
        </HashLink>
        <HashLink
          scroll={scrollWithOffset}
          to="/#about"
          onClick={linkClicked}
          smooth
          className={styles["nav-item"]}
        >
          About
        </HashLink>
        <HashLink
          scroll={scrollWithOffset}
          to="/speakers"
          onClick={linkClicked}
          smooth
          className={styles["nav-item"]}
        >
          Speakers
        </HashLink>
        <HashLink
          scroll={scrollWithOffset}
          to="#"
          onClick={linkClicked}
          smooth
          className={styles["nav-item"]}
        >
          Gallery
        </HashLink>
        <HashLink
          scroll={scrollWithOffset}
          to="#"
          onClick={linkClicked}
          smooth
          className={styles["nav-item"]}
        >
          Team
        </HashLink>
        <HashLink
          scroll={scrollWithOffset}
          to="#"
          onClick={linkClicked}
          smooth
          className={styles["nav-item"]}
        >
          Sponsors
        </HashLink>
        <HashLink
          scroll={scrollWithOffset}
          to="#"
          onClick={linkClicked}
          smooth
          className={styles["nav-item"]}
        >
          Contact Us
        </HashLink>
      </div>
    </header>
  );
}

export default Header;
