import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/SettingsModal.module.scss";

interface SettingsModalProps {
  closeSettingsModal: () => void;
  setTimePlayerOne: React.Dispatch<
    React.SetStateAction<[number, number, number]>
  >;
  setTimePlayerTwo: React.Dispatch<
    React.SetStateAction<[number, number, number]>
  >;
  setPlayerOneIncrementAmount: React.Dispatch<React.SetStateAction<number>>;
  setPlayerTwoIncrementAmount: React.Dispatch<React.SetStateAction<number>>;
  setSettingsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPauseAllTimer: React.Dispatch<React.SetStateAction<boolean>>;
  setPauseTimerPlayerOne: React.Dispatch<React.SetStateAction<boolean>>;
  setPauseTimerPlayerTwo: React.Dispatch<React.SetStateAction<boolean>>;
  setInitialTimePlayerOne: React.Dispatch<React.SetStateAction<boolean>>;
  setInitialTimePlayerTwo: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsModal = ({
  closeSettingsModal,
  setTimePlayerOne,
  setTimePlayerTwo,
  setPlayerOneIncrementAmount,
  setPlayerTwoIncrementAmount,
  setSettingsModal,
  setPauseAllTimer,
  setPauseTimerPlayerOne,
  setPauseTimerPlayerTwo,
  setInitialTimePlayerOne,
  setInitialTimePlayerTwo,
}: SettingsModalProps): JSX.Element => {
  const { height } = useWindowSize();

  // Set Game Mode to Bullet One
  const bulletOne = () => {
    setTimePlayerOne([0, 1, 0]);
    setTimePlayerTwo([0, 1, 0]);
    setPlayerOneIncrementAmount(0);
    setPlayerTwoIncrementAmount(0);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
  };

  // Set Game Mode to Bullet Two
  const bulletTwo = () => {
    setTimePlayerOne([0, 2, 0]);
    setTimePlayerTwo([0, 2, 0]);
    setPlayerTwoIncrementAmount(1);
    setPlayerOneIncrementAmount(1);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
  };

  // Set Game Mode to Blitz One
  const blitzOne = () => {
    setTimePlayerOne([0, 3, 0]);
    setTimePlayerTwo([0, 3, 0]);
    setPlayerTwoIncrementAmount(0);
    setPlayerOneIncrementAmount(0);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
  };

  // Set Game Mode to Blitz Two
  const blitzTwo = () => {
    setTimePlayerOne([0, 3, 0]);
    setTimePlayerTwo([0, 3, 0]);
    setPlayerTwoIncrementAmount(2);
    setPlayerOneIncrementAmount(2);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
  };

  // Set Game Mode to Blitz Three
  const blitzThree = () => {
    setTimePlayerOne([0, 5, 0]);
    setTimePlayerTwo([0, 5, 0]);
    setPlayerTwoIncrementAmount(0);
    setPlayerOneIncrementAmount(0);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
  };

  // Set Game Mode to Blitz Four
  const blitzFour = () => {
    setTimePlayerOne([0, 5, 0]);
    setTimePlayerTwo([0, 5, 0]);
    setPlayerTwoIncrementAmount(3);
    setPlayerOneIncrementAmount(3);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
  };

  // Set Game Mode to Rapid One
  const rapidOne = () => {
    setTimePlayerOne([0, 10, 0]);
    setTimePlayerTwo([0, 10, 0]);
    setPlayerTwoIncrementAmount(0);
    setPlayerOneIncrementAmount(0);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
  };

  // Set Game Mode to Rapid Two
  const rapidTwo = () => {
    setTimePlayerOne([0, 10, 0]);
    setTimePlayerTwo([0, 10, 0]);
    setPlayerTwoIncrementAmount(5);
    setPlayerOneIncrementAmount(5);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
  };

  // Set Game Mode to Rapid Three
  const rapidThree = () => {
    setTimePlayerOne([0, 15, 0]);
    setTimePlayerTwo([0, 15, 0]);
    setPlayerTwoIncrementAmount(10);
    setPlayerOneIncrementAmount(10);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
  };

  // Set Game Mode to Classical One
  const classicalOne = () => {
    setTimePlayerOne([0, 30, 0]);
    setTimePlayerTwo([0, 30, 0]);
    setPlayerTwoIncrementAmount(0);
    setPlayerOneIncrementAmount(0);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
  };

  // Set Game Mode to Classical Two
  const classicalTwo = () => {
    setTimePlayerOne([0, 30, 0]);
    setTimePlayerTwo([0, 30, 0]);
    setPlayerTwoIncrementAmount(20);
    setPlayerOneIncrementAmount(20);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
  };

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
            <button onClick={bulletOne}>1 | 0</button>
            <button onClick={bulletTwo}>2 | 1</button>
          </div>
        </div>

        <div className={styles["blitz-section"]}>
          <h1>Blitz</h1>
          <div className={styles["blitz-section-buttons"]}>
            <button onClick={blitzOne}>3 | 0</button>
            <button onClick={blitzTwo}>3 | 2</button>
            <button onClick={blitzThree}>5 | 0</button>
            <button onClick={blitzFour}>5 | 3</button>
          </div>
        </div>

        <div className={styles["rapid-section"]}>
          <h1>Rapid</h1>
          <div className={styles["rapid-section-buttons"]}>
            <button onClick={rapidOne}>10 | 0</button>
            <button onClick={rapidTwo}>10 | 5</button>
            <button onClick={rapidThree}>15 | 10</button>
          </div>
        </div>

        <div className={styles["classical-section"]}>
          <h1>Classical</h1>
          <div className={styles["classical-section-buttons"]}>
            <button onClick={classicalOne}>30 | 0</button>
            <button onClick={classicalTwo}>30 | 20</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
