import styles from "./Modal.module.css";

function Modal({ children, modalOpen, setModalOpen }) {
  return (
    <div
      onClick={() => setModalOpen(false)}
      className={`${styles.container} ${modalOpen && styles.modalVisible}`}
    >
      <main className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <svg
          className={styles.modalSvg}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <rect
            x="0"
            y="0"
            fill="none"
            width="100%"
            height="100%"
            rx="10"
          ></rect>
        </svg>
      </main>
    </div>
  );
}

export default Modal;
