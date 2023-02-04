import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/SettingsModal.module.scss";

interface SettingsModalProps {
  closeSettingsModal: () => void;
}

const SettingsModal = ({
  closeSettingsModal,
}: SettingsModalProps): JSX.Element => {
  const { height } = useWindowSize();

  return (
    <div className={styles["settings-modal-wrapper"]}>
      <div
        className={styles["settings-modal-content"]}
        style={{ height: `${height}px` }}
      >
        <div className={styles["close-section"]}>
          <button onClick={closeSettingsModal}>
            <img src="/close.svg" alt="Close Icon" />
          </button>
        </div>

        <div className={styles["bullet-section"]}>
          <h1>Bullet</h1>
          <div className={styles["bullet-section-buttons"]}>
            <button>1 | 0</button>
            <button>2 | 1</button>
          </div>
        </div>

        <div className={styles["blitz-section"]}>
          <h1>Blitz</h1>
          <div className={styles["blitz-section-buttons"]}>
            <button>3 | 0</button>
            <button>3 | 2</button>
            <button>5 | 0</button>
            <button>5 | 3</button>
          </div>
        </div>

        <div className={styles["rapid-section"]}>
          <h1>Rapid</h1>
          <div className={styles["rapid-section-buttons"]}>
            <button>10 | 0</button>
            <button>10 | 5</button>
            <button>15 | 10</button>
          </div>
        </div>

        <div className={styles["classical-section"]}>
          <h1>Classical</h1>
          <div className={styles["classical-section-buttons"]}>
            <button>30 | 0</button>
            <button>30 | 20</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
