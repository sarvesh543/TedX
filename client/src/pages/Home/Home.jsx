import React from "react";
import styles from "./Home.module.css";
import { ReactComponent as Logo } from "../../logo.svg";
import About from "../../components/About/About";

function Home() {
  return (
    <div>
      <div className={styles["home-logo"]}>
        <Logo />
      </div>
      <About />
    </div>
  );
}

export default Home;
