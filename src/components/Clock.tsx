import { useState, useEffect, useRef, useCallback } from "react";
import SettingsModal from "./SettingsModal";
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/Clock.module.scss";

const Clock = () => {
  const { height } = useWindowSize();

  const chessClockAudioOne = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/chess-clock-one.mp3") : undefined
  );

  const chessClockAudioTwo = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/chess-clock-two.mp3") : undefined
  );

  const [initialTimePlayerOne, setInitialTimePlayerOne] = useState(true);
  const [initialTimePlayerTwo, setInitialTimePlayerTwo] = useState(true);

  const [pauseAllTimer, setPauseAllTimer] = useState(true);
  const [pauseTimerPlayerOne, setPauseTimerPlayerOne] = useState(false);
  const [pauseTimerPlayerTwo, setPauseTimerPlayerTwo] = useState(false);

  const [playerOneIncrement, setPlayerOneIncrement] = useState(0);
  const [playerOneIncrementAmount, setPlayerOneIncrementAmount] = useState(0);

  const [playerTwoIncrement, setPlayerTwoIncrement] = useState(0);
  const [playerTwoIncrementAmount, setPlayerTwoIncrementAmount] = useState(0);

  const [settingsModal, setSettingsModal] = useState(false);

  const [muteSound, setMuteSound] = useState(false);

  const playerOneTime = { P1hours: 0, P1minutes: 10, P1seconds: 0 };
  const playerTwoTime = { P2hours: 0, P2minutes: 10, P2seconds: 0 };

  const { P1hours = 0, P1minutes = 0, P1seconds = 60 } = playerOneTime;
  const { P2hours = 0, P2minutes = 0, P2seconds = 60 } = playerTwoTime;

  const [[P1hrs, P1mins, P1secs], setTimePlayerOne] = useState([
    P1hours,
    P1minutes,
    P1seconds,
  ]);

  const [[P2hrs, P2mins, P2secs], setTimePlayerTwo] = useState([
    P2hours,
    P2minutes,
    P2seconds,
  ]);

  const [[NewP1hrs, NewP1mins, NewP1secs], setResetTimePlayerOne] = useState([
    P1hours,
    P1minutes,
    P1seconds,
  ]);

  const [[NewP2hrs, NewP2mins, NewP2secs], setResetTimePlayerTwo] = useState([
    P2hours,
    P2minutes,
    P2seconds,
  ]);

  const outOfTime =
    (P1hrs === 0 && P1mins === 0 && P1secs === 0) ||
    (P2hrs === 0 && P2mins === 0 && P2secs === 0);

  const PlayerOneTick = () => {
    if (P1hrs === 0 && P1mins === 0 && P1secs === 0) {
      return;
    } else if (pauseAllTimer) {
      return;
    } else if (pauseTimerPlayerOne) {
      setPauseTimerPlayerTwo(false);
    } else if (P1mins === 0 && P1secs === 0) {
      setTimePlayerOne([P1hrs - 1, 59, 59]);
    } else if (P1secs === 0) {
      setTimePlayerOne([P1hrs, P1mins - 1, 59]);
    } else {
      setTimePlayerOne([P1hrs, P1mins, P1secs - 1]);
    }
  };

  const PlayerTwoTick = () => {
    if (P2hrs === 0 && P2mins === 0 && P2secs === 0) {
      return;
    } else if (pauseAllTimer) {
      return;
    } else if (pauseTimerPlayerTwo) {
      setPauseTimerPlayerOne(false);
    } else if (P2mins === 0 && P2secs === 0) {
      setTimePlayerTwo([P2hrs - 1, 59, 59]);
    } else if (P2secs === 0) {
      setTimePlayerTwo([P2hrs, P2mins - 1, 59]);
    } else {
      setTimePlayerTwo([P2hrs, P2mins, P2secs - 1]);
    }
  };

  // Reset Timer
  const resetTimer = () => {
    setTimePlayerOne([NewP1hrs, NewP1mins, NewP1secs]);
    setTimePlayerTwo([NewP2hrs, NewP2mins, NewP2secs]);
    setPlayerOneIncrement(playerOneIncrementAmount);
    setPlayerTwoIncrement(playerTwoIncrementAmount);
    setSettingsModal(false);
    setPauseAllTimer(true);
    setPauseTimerPlayerOne(false);
    setPauseTimerPlayerTwo(false);
    setInitialTimePlayerOne(true);
    setInitialTimePlayerTwo(true);

    if (muteSound) {
      return;
    } else {
      chessClockAudioOne.current?.play();
    }
  };

  // Pause Both Timer
  const allTimerPause = () => {
    setPauseAllTimer(true);

    if (muteSound) {
      return;
    } else {
      chessClockAudioTwo.current?.play();
    }
  };

  // Resume Both Timer
  const allTimerResume = () => {
    setPauseAllTimer(false);

    if (muteSound) {
      return;
    } else {
      chessClockAudioTwo.current?.play();
    }
  };

  // Pause Player One Timer
  const playerOnePause = () => {
    setPauseTimerPlayerOne(!pauseTimerPlayerOne);
    setPauseTimerPlayerTwo(false);
    setPauseAllTimer(false);
    setPlayerOneIncrement(playerOneIncrementAmount);
    setPlayerTwoIncrement(0);

    if (muteSound) {
      return;
    } else {
      chessClockAudioOne.current?.play();
    }
  };

  // Pause Player Two Timer
  const playerTwoPause = () => {
    setPauseTimerPlayerTwo(!pauseTimerPlayerTwo);
    setPauseTimerPlayerOne(false);
    setPauseAllTimer(false);
    setPlayerOneIncrement(0);
    setPlayerTwoIncrement(playerTwoIncrementAmount);

    if (muteSound) {
      return;
    } else {
      chessClockAudioOne.current?.play();
    }
  };

  // Start Timer Player One
  const startTimerPlayerOne = () => {
    setInitialTimePlayerOne(false);
    setInitialTimePlayerTwo(false);
    setPauseAllTimer(false);
    setPauseTimerPlayerTwo(true);
    setPlayerTwoIncrement(0);

    if (muteSound) {
      return;
    } else {
      chessClockAudioTwo.current?.play();
    }
  };

  // Start Timer Player Two
  const startTimerPlayerTwo = () => {
    setInitialTimePlayerOne(false);
    setInitialTimePlayerTwo(false);
    setPauseAllTimer(false);
    setPauseTimerPlayerOne(true);
    setPlayerOneIncrement(0);

    if (muteSound) {
      return;
    } else {
      chessClockAudioTwo.current?.play();
    }
  };

  // Open Settings Modal
  const openSettingsModal = () => {
    setSettingsModal(true);
    setPauseAllTimer(true);
  };

  // Close Settings Moda
  const closeSettingsModal = () => {
    setSettingsModal(false);
  };

  // Mute Sound
  const muteClockSound = () => {
    setMuteSound(!muteSound);
  };

  useEffect(() => {
    const timerIdPlayerOne = setInterval(() => PlayerOneTick(), 1000);
    const timerIdPlayerTwo = setInterval(() => PlayerTwoTick(), 1000);

    return () => {
      clearInterval(timerIdPlayerOne);
      clearInterval(timerIdPlayerTwo);
    };
  });

  // Player One Increment
  useEffect(() => {
    if (pauseTimerPlayerOne) {
      setTimePlayerOne([P1hrs, P1mins, P1secs + playerOneIncrement]);

      if (P1secs >= 60 - playerOneIncrement) {
        setTimePlayerOne([P1hrs, P1mins + 1, P1secs - 60 + playerOneIncrement]);
      }

      if (P1mins >= 59 && P1secs >= 60 - playerOneIncrement) {
        setTimePlayerOne([P1hrs + 1, 0, P1secs - 60 + playerOneIncrement]);
      }
    }
  }, [pauseTimerPlayerOne, playerOneIncrement]);

  // Player Two Increment
  useEffect(() => {
    if (pauseTimerPlayerTwo) {
      setTimePlayerTwo([P2hrs, P2mins, P2secs + playerTwoIncrement]);

      if (P2secs >= 60 - playerTwoIncrement) {
        setTimePlayerTwo([P2hrs, P2mins + 1, P2secs - 60 + playerTwoIncrement]);
      }

      if (P2mins >= 59 && P2secs >= 60 - playerTwoIncrement) {
        setTimePlayerTwo([P2hrs + 1, 0, P2secs - 60 + playerTwoIncrement]);
      }
    }
  }, [pauseTimerPlayerTwo, playerTwoIncrement]);

  const handleKeyDown = useCallback(
    (e: { keyCode: number; key: string }) => {
      if (e.key === "l" && initialTimePlayerOne) {
        startTimerPlayerOne();
      } else if (e.key === "a" && initialTimePlayerTwo) {
        startTimerPlayerTwo();
      } else if (e.keyCode == 32 && pauseTimerPlayerOne && !pauseAllTimer) {
        playerTwoPause();
      } else if (e.keyCode == 32 && pauseTimerPlayerTwo && !pauseAllTimer) {
        playerOnePause();
      } else if (e.key === "p" && !pauseAllTimer) {
        allTimerPause();
      } else if (
        e.key === "p" &&
        pauseAllTimer &&
        (!initialTimePlayerOne || !initialTimePlayerTwo) &&
        !settingsModal
      ) {
        allTimerResume();
      } else if (e.key === "r") {
        resetTimer();
      } else if (e.key === "f") {
        openSettingsModal();
      } else if (e.key === "g") {
        closeSettingsModal();
      } else if (e.key === "v") {
        setMuteSound(!muteSound);
      }
    },
    [
      initialTimePlayerOne,
      initialTimePlayerTwo,
      pauseTimerPlayerOne,
      pauseTimerPlayerTwo,
      pauseAllTimer,
      settingsModal,
      muteSound,
    ]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <div
        className={styles["clock-wrapper"]}
        style={{ height: `${height}px` }}
      >
        {P2hrs === 0 && P2mins === 0 && P2secs === 0 ? (
          <button className={styles["timer-button-top-lost"]}>
            {`${P2hrs.toString().padStart(2, "0")}:${P2mins.toString().padStart(
              2,
              "0"
            )}:${P2secs.toString().padStart(2, "0")}`}
          </button>
        ) : P1hrs === 0 && P1mins === 0 && P1secs === 0 ? (
          <button className={styles["timer-button-top-active"]}>
            {`${P2hrs.toString().padStart(2, "0")}:${P2mins.toString().padStart(
              2,
              "0"
            )}:${P2secs.toString().padStart(2, "0")}`}
          </button>
        ) : (
          <button
            className={
              pauseTimerPlayerOne
                ? styles["timer-button-top-active"]
                : styles["timer-button-top"]
            }
            onClick={
              initialTimePlayerTwo ? startTimerPlayerTwo : playerTwoPause
            }
            disabled={
              pauseTimerPlayerTwo || (pauseAllTimer && pauseTimerPlayerOne)
            }
          >
            {`${P2hrs.toString().padStart(2, "0")}:${P2mins.toString().padStart(
              2,
              "0"
            )}:${P2secs.toString().padStart(2, "0")}`}
          </button>
        )}

        <div className={styles["clock-settings"]}>
          <button className={styles["reset-icon"]} onClick={resetTimer}>
            <img src="/restart.svg" alt="Settings" />
          </button>

          {outOfTime ? (
            <button className={styles["play-pause-icon-disabled"]}>
              <img src="/play.svg" alt="Pause" />
            </button>
          ) : (
            <button
              onClick={pauseAllTimer ? allTimerResume : allTimerPause}
              disabled={
                initialTimePlayerOne || initialTimePlayerTwo || outOfTime
              }
              className={
                initialTimePlayerOne || initialTimePlayerTwo
                  ? styles["play-pause-icon-disabled"]
                  : styles["play-pause-icon"]
              }
            >
              <img
                src={pauseAllTimer ? "/play.svg" : "/pause.svg"}
                alt="Pause"
              />
            </button>
          )}

          <button
            className={styles["settings-icon"]}
            onClick={openSettingsModal}
          >
            <img src="/settings.svg" alt="Settings" />
          </button>
        </div>

        {P1hrs === 0 && P1mins === 0 && P1secs === 0 ? (
          <button className={styles["timer-button-bottom-lost"]}>
            {`${P1hrs.toString().padStart(2, "0")}:${P1mins.toString().padStart(
              2,
              "0"
            )}:${P1secs.toString().padStart(2, "0")}`}
          </button>
        ) : P2hrs === 0 && P2mins === 0 && P2secs === 0 ? (
          <button className={styles["timer-button-bottom-active"]}>
            {`${P1hrs.toString().padStart(2, "0")}:${P1mins.toString().padStart(
              2,
              "0"
            )}:${P1secs.toString().padStart(2, "0")}`}
          </button>
        ) : (
          <button
            className={
              pauseTimerPlayerTwo
                ? styles["timer-button-bottom-active"]
                : styles["timer-button-bottom"]
            }
            onClick={
              initialTimePlayerOne ? startTimerPlayerOne : playerOnePause
            }
            disabled={
              pauseTimerPlayerOne || (pauseAllTimer && pauseTimerPlayerTwo)
            }
          >
            {`${P1hrs.toString().padStart(2, "0")}:${P1mins.toString().padStart(
              2,
              "0"
            )}:${P1secs.toString().padStart(2, "0")}`}
          </button>
        )}
      </div>

      {settingsModal && (
        <SettingsModal
          closeSettingsModal={closeSettingsModal}
          muteSound={muteSound}
          muteClockSound={muteClockSound}
          setTimePlayerOne={setTimePlayerOne}
          setTimePlayerTwo={setTimePlayerTwo}
          setPlayerOneIncrementAmount={setPlayerOneIncrementAmount}
          setPlayerTwoIncrementAmount={setPlayerTwoIncrementAmount}
          setSettingsModal={setSettingsModal}
          setPauseAllTimer={setPauseAllTimer}
          setPauseTimerPlayerOne={setPauseTimerPlayerOne}
          setPauseTimerPlayerTwo={setPauseTimerPlayerTwo}
          setInitialTimePlayerOne={setInitialTimePlayerOne}
          setInitialTimePlayerTwo={setInitialTimePlayerTwo}
          setResetTimePlayerOne={setResetTimePlayerOne}
          setResetTimePlayerTwo={setResetTimePlayerTwo}
        />
      )}
    </>
  );
};

export default Clock;
