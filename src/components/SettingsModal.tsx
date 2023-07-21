import { ChangeEvent, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import usePlayerTime from "../hooks/usePlayerTime";
import styles from "../styles/SettingsModal.module.scss";

interface SettingsModalProps {
  closeSettingsModal: () => void;
  muteSound: boolean;
  muteClockSound: () => void;
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
  setResetTimePlayerOne: React.Dispatch<
    React.SetStateAction<[number, number, number]>
  >;
  setResetTimePlayerTwo: React.Dispatch<
    React.SetStateAction<[number, number, number]>
  >;
}

const SettingsModal = ({
  closeSettingsModal,
  muteSound,
  muteClockSound,
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
  setResetTimePlayerOne,
  setResetTimePlayerTwo,
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
    setResetTimePlayerOne([0, 1, 0]);
    setResetTimePlayerTwo([0, 1, 0]);
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
    setResetTimePlayerOne([0, 2, 0]);
    setResetTimePlayerTwo([0, 2, 0]);
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
    setResetTimePlayerOne([0, 3, 0]);
    setResetTimePlayerTwo([0, 3, 0]);
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
    setResetTimePlayerOne([0, 3, 0]);
    setResetTimePlayerTwo([0, 3, 0]);
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
    setResetTimePlayerOne([0, 5, 0]);
    setResetTimePlayerTwo([0, 5, 0]);
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
    setResetTimePlayerOne([0, 5, 0]);
    setResetTimePlayerTwo([0, 5, 0]);
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
    setResetTimePlayerOne([0, 10, 0]);
    setResetTimePlayerTwo([0, 10, 0]);
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
    setResetTimePlayerOne([0, 10, 0]);
    setResetTimePlayerTwo([0, 10, 0]);
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
    setResetTimePlayerOne([0, 15, 0]);
    setResetTimePlayerTwo([0, 15, 0]);
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
    setResetTimePlayerOne([0, 30, 0]);
    setResetTimePlayerTwo([0, 30, 0]);
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
    setResetTimePlayerOne([0, 30, 0]);
    setResetTimePlayerTwo([0, 30, 0]);
  };

  // Handle Player One Hours Change
  const handlePlayerOneHoursChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, min, max } = e.target;
    let numValue = Number(value);

    numValue = Math.max(
      Number(min),
      Math.min(Number(max), Number(value.replace(/\D/, "")))
    );

    setPlayerOneHours(numValue);
    setPlayerOneInputNotChanged(false);
  };

  // Handle Player One Minutes Change
  const handlePlayerOneMinutesChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, min, max } = e.target;
    let numValue = Number(value);

    numValue = Math.max(
      Number(min),
      Math.min(Number(max), Number(value.replace(/\D/, "")))
    );

    setPlayerOneMinutes(numValue);
    setPlayerOneInputNotChanged(false);
  };

  // Handle Player One Seconds Change
  const handlePlayerOneSecondsChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, min, max } = e.target;
    let numValue = Number(value);

    numValue = Math.max(
      Number(min),
      Math.min(Number(max), Number(value.replace(/\D/, "")))
    );

    setPlayerOneSeconds(numValue);
    setPlayerOneInputNotChanged(false);
  };

  // Handle Player Two Hours Change
  const handlePlayerTwoHoursChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, min, max } = e.target;
    let numValue = Number(value);

    numValue = Math.max(
      Number(min),
      Math.min(Number(max), Number(value.replace(/\D/, "")))
    );

    setPlayerTwoHours(numValue);
    setPlayerTwoInputNotChanged(false);
  };

  // Handle Player Two Minutes Change
  const handlePlayerTwoMinutesChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, min, max } = e.target;
    let numValue = Number(value);

    numValue = Math.max(
      Number(min),
      Math.min(Number(max), Number(value.replace(/\D/, "")))
    );

    setPlayerTwoMinutes(numValue);
    setPlayerTwoInputNotChanged(false);
  };

  // Handle Player Two Seconds Change
  const handlePlayerTwoSecondsChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, min, max } = e.target;
    let numValue = Number(value);

    numValue = Math.max(
      Number(min),
      Math.min(Number(max), Number(value.replace(/\D/, "")))
    );

    setPlayerTwoSeconds(numValue);
    setPlayerTwoInputNotChanged(false);
  };

  // Handle Increment Change
  const handleIncrementChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, min, max } = e.target;
    let numValue = Number(value);

    numValue = Math.max(
      Number(min),
      Math.min(Number(max), Number(value.replace(/\D/, "")))
    );

    setCustomIncrement(numValue);
    setIncrementInputNotChanged(false);
  };

  // Handle Player One Input Submit
  const handleEditInputPlayerOneSubmit = () => {
    setTimePlayerOne([playerOneHours, playerOneMinutes, playerOneSeconds]);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
    setPlayerOneInputNotChanged(true);
    setResetTimePlayerOne([playerOneHours, playerOneMinutes, playerOneSeconds]);
  };

  // Handle Player Two Input Submit
  const handleEditInputPlayerTwoSubmit = () => {
    setTimePlayerTwo([playerTwoHours, playerTwoMinutes, playerTwoSeconds]);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);
    setPlayerTwoInputNotChanged(true);
    setResetTimePlayerTwo([playerTwoHours, playerTwoMinutes, playerTwoSeconds]);
  };

  const handleEditIncrementSubmit = () => {
    setPlayerTwoIncrementAmount(customIncrement);
    setPlayerOneIncrementAmount(customIncrement);
    setIncrementInputNotChanged(true);
  };

  // Reload App
  const reloadApp = () => {
    window.location.reload();
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

        <div className={styles["custom-section"]}>
          <h1 className={styles["custom-title"]}>Custom</h1>

          <div className={styles["custom-player-one-section"]}>
            <h2>Player One</h2>
            <div className={styles["custom-player-one-inputs"]}>
              <div>
                <input
                  type="text"
                  value={playerOneHours}
                  onChange={handlePlayerOneHoursChange}
                  min="0"
                  max="59"
                />
                <p>Hours</p>
              </div>
              <div>
                <input
                  type="text"
                  value={playerOneMinutes}
                  onChange={handlePlayerOneMinutesChange}
                  min="0"
                  max="59"
                />
                <p>Minutes</p>
              </div>
              <div>
                <input
                  type="text"
                  value={playerOneSeconds}
                  onChange={handlePlayerOneSecondsChange}
                  min="0"
                  max="59"
                />
                <p>Seconds</p>
              </div>
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
            </div>
          </div>

          <div className={styles["custom-player-two-section"]}>
            <h2>Player Two</h2>
            <div className={styles["custom-player-two-inputs"]}>
              <div>
                <input
                  type="text"
                  value={playerTwoHours}
                  onChange={handlePlayerTwoHoursChange}
                  min="0"
                  max="59"
                />
                <p>Hours</p>
              </div>
              <div>
                <input
                  type="text"
                  value={playerTwoMinutes}
                  onChange={handlePlayerTwoMinutesChange}
                  min="0"
                  max="59"
                />
                <p>Minutes</p>
              </div>
              <div>
                <input
                  type="text"
                  value={playerTwoSeconds}
                  onChange={handlePlayerTwoSecondsChange}
                  min="0"
                  max="59"
                />
                <p>Seconds</p>
              </div>
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
            </div>
          </div>

          <div className={styles["custom-increment-section"]}>
            <h2>Increment Time</h2>
            <div className={styles["custom-increment-form"]}>
              <input
                type="text"
                value={customIncrement}
                onChange={handleIncrementChange}
                min="0"
                max="60"
              />
              <button
                onClick={handleEditIncrementSubmit}
                disabled={incrementInputNotChanged}
              >
                Save
              </button>
            </div>
          </div>

          <div className={styles["sound-section"]}>
            <h1 className={styles["sound-section-title"]}>Sound</h1>
            <button onClick={muteClockSound}>
              {muteSound ? <img src="/mute.svg" /> : <img src="/unmute.svg" />}
            </button>
          </div>

          <div className={styles["reload-section"]}>
            <h1 className={styles["reload-section-title"]}>Reload App</h1>
            <button onClick={reloadApp}>
              <img src="/restart.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
