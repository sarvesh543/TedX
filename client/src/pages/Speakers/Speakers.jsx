import React, { useState } from "react";
import styles from "./Speakers.module.css";
import mockData from "./MOCK_DATA.json";
import Modal from "../../components/Modal/Modal";

function Speakers() {
  const [currentSpeakers, setCurrentSpeakers] = useState(mockData);
  const [activeSpeaker, setActiveSpeaker] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        {activeSpeaker !== null && (
          <div className={styles["active-container"]}>
            <div>
              <h1>{activeSpeaker.name}</h1>
              <img
                src={activeSpeaker.image}
                alt={activeSpeaker.name}
                className={styles["active-image"]}
              />
            </div>
            <div className={styles["active-desc"]}>
              <p className={styles["active-short"]}>short description</p>
              <p>{activeSpeaker.description}</p>
            </div>
          </div>
        )}
      </Modal>
      <div className={styles["speakers-container"]} id="speakers">
        <h1 className={styles["speakers-heading"]}>Speakers</h1>
        <div className={styles["speakers-list"]}>
          {currentSpeakers.length > 0 ? (
            currentSpeakers.map((speaker) => {
              return (
                <Speaker
                  key={speaker.id}
                  speaker={speaker}
                  setModalOpen={setModalOpen}
                  setActiveSpeaker={setActiveSpeaker}
                />
              );
            })
          ) : (
            <p className={styles["no-speakers"]}>No speakers yet</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Speakers;

function Speaker({ speaker, setModalOpen, setActiveSpeaker }) {
  const handleCardClick = () => {
    setActiveSpeaker(speaker);
    setModalOpen(true);
  };
  return (
    <div className={styles["speaker-card"]} onClick={handleCardClick}>
      <img
        src={speaker.image}
        alt={speaker.name}
        className={styles["speaker-image"]}
      />
      <h2 className={styles["speaker-name"]}>{speaker.name}</h2>

      <p className={styles["speaker-profession"]}>
        <hr />
        {speaker.profession}
        <hr />
      </p>
    </div>
  );
}
