import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import usePlayerTime from "../hooks/usePlayerTime";
import styles from "../styles/SettingsModal.module.scss";

interface SettingsModalProps {
  closeSettingsModal: () => void;
  playerOneIncrementAmount: number;
  P1hrs: number;
  P1mins: number;
  P1secs: number;
  P2hrs: number;
  P2mins: number;
  P2secs: number;
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
  playerOneIncrementAmount,
  P1hrs,
  P1mins,
  P1secs,
  P2hrs,
  P2mins,
  P2secs,
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

  const [playerOneInputNotChanged, setPlayerOneInputNotChanged] =
    useState(true);
  const [playerTwoInputNotChanged, setPlayerTwoInputNotChanged] =
    useState(true);
  const [incrementInputNotChanged, setIncrementInputNotChanged] =
    useState(true);

  const {
    playerOneHours,
    setPlayerOneHours,
    playerOneMinutes,
    setPlayerOneMinutes,
    playerOneSeconds,
    setPlayerOneSeconds,
    playerTwoHours,
    setPlayerTwoHours,
    playerTwoMinutes,
    setPlayerTwoMinutes,
    playerTwoSeconds,
    setPlayerTwoSeconds,
    customIncrement,
    setCustomIncrement,
  } = usePlayerTime();

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

  const handleEditInputPlayerOneSubmit = () => {
    setTimePlayerOne([playerOneHours, playerOneMinutes, playerOneSeconds]);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
    setPlayerOneInputNotChanged(true);
  };

  const handleEditInputPlayerTwoSubmit = () => {
    setTimePlayerTwo([playerTwoHours, playerTwoMinutes, playerTwoSeconds]);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
    setPlayerTwoInputNotChanged(true);
  };

  const handleEditIncrementSubmit = () => {
    setPlayerTwoIncrementAmount(customIncrement);
    setPlayerOneIncrementAmount(customIncrement);
    setIncrementInputNotChanged(true);
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

        <div>
          <h1>Custom</h1>

          <h2>Player One</h2>
          <input
            type="text"
            defaultValue={P1hrs}
            onChange={(e) => {
              setPlayerOneHours(Number(e.target.value));
              setPlayerOneInputNotChanged(false);
            }}
          />
          <input
            type="text"
            defaultValue={P1mins}
            onChange={(e) => {
              setPlayerOneMinutes(Number(e.target.value));
              setPlayerOneInputNotChanged(false);
            }}
          />
          <input
            type="text"
            defaultValue={P1secs}
            onChange={(e) => {
              setPlayerOneSeconds(Number(e.target.value));
              setPlayerOneInputNotChanged(false);
            }}
          />
          <button
            onClick={handleEditInputPlayerOneSubmit}
            disabled={
              playerOneInputNotChanged ||
              (playerOneHours === 0 &&
                playerOneMinutes === 0 &&
                playerOneSeconds === 0)
            }
          >
            Save
          </button>

          <h2>Player Two</h2>
          <input
            type="text"
            defaultValue={P2hrs}
            onChange={(e) => {
              setPlayerTwoHours(Number(e.target.value));
              setPlayerTwoInputNotChanged(false);
            }}
          />
          <input
            type="text"
            defaultValue={P2mins}
            onChange={(e) => {
              setPlayerTwoMinutes(Number(e.target.value));
              setPlayerTwoInputNotChanged(false);
            }}
          />
          <input
            type="text"
            defaultValue={P2secs}
            onChange={(e) => {
              setPlayerTwoSeconds(Number(e.target.value));
              setPlayerTwoInputNotChanged(false);
            }}
          />
          <button
            onClick={handleEditInputPlayerTwoSubmit}
            disabled={
              playerTwoInputNotChanged ||
              (playerTwoHours === 0 &&
                playerTwoMinutes === 0 &&
                playerTwoSeconds === 0)
            }
          >
            Save
          </button>

          <h2>Increment Time</h2>
          <input
            type="text"
            defaultValue={playerOneIncrementAmount}
            onChange={(e) => {
              setCustomIncrement(Number(e.target.value));
              setIncrementInputNotChanged(false);
            }}
          />
          <button
            onClick={handleEditIncrementSubmit}
            disabled={incrementInputNotChanged}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
