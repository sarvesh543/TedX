import React from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles["about-container"]} id="about">
      <h1 className={styles["about-heading"]}>About Us</h1>
      <p className={styles["about-content"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
        similique tempore obcaecati eum natus atque enim, officiis rem, impedit,
        unde voluptate ab! Recusandae obcaecati minus enim repudiandae autem non
        corrupti officia vitae, sed reprehenderit accusamus ex quia eveniet
        dolores ea eligendi libero. Voluptatibus vitae voluptatum, illum ea
        deserunt facilis. Magni earum a natus corporis hic est, quasi, harum
        quas corrupti placeat cum eum culpa facilis maxime. Ipsam deleniti enim
        ex nemo iste, quod quibusdam eaque sunt? Ex similique fugiat rerum
        distinctio eveniet, non iusto voluptas quidem? Nesciunt ipsa error alias
        accusamus veniam blanditiis exercitationem maiores pariatur amet,
        consectetur neque sint.
      </p>
      <HashLink to="#" target="_blank">
        <button className={styles["apply-btn"]}>
          Apply to become a speaker
        </button>
      </HashLink>
    </div>
  );
}

export default About;
