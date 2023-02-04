import { useState, useEffect } from "react";
import SettingsModal from "./SettingsModal";
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/Clock.module.scss";

const Clock = (): JSX.Element => {
  const { height } = useWindowSize();

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

  const ResetPlayerOne = () =>
    setTimePlayerOne([
      parseInt(P1hours as unknown as string),
      parseInt(P1minutes as unknown as string),
      parseInt(P1seconds as unknown as string),
    ]);

  const ResetPlayerTwo = () =>
    setTimePlayerOne([
      parseInt(P2hours as unknown as string),
      parseInt(P2minutes as unknown as string),
      parseInt(P2seconds as unknown as string),
    ]);

  // Pause Both Timer
  const allTimerPause = () => {
    setPauseAllTimer(true);
  };

  // Resume Both Timer
  const allTimerResume = () => {
    setPauseAllTimer(false);
  };

  // Pause Player One Timer
  const playerOnePause = () => {
    setPauseTimerPlayerOne(!pauseTimerPlayerOne);
    setPauseTimerPlayerTwo(false);
    setPauseAllTimer(false);
    setPlayerOneIncrement(playerOneIncrementAmount);
    setPlayerTwoIncrement(0);
  };

  // Pause Player Two Timer
  const playerTwoPause = () => {
    setPauseTimerPlayerTwo(!pauseTimerPlayerTwo);
    setPauseTimerPlayerOne(false);
    setPauseAllTimer(false);
    setPlayerOneIncrement(0);
    setPlayerTwoIncrement(playerTwoIncrementAmount);
  };

  // Start Timer Player One
  const startTimerPlayerOne = () => {
    setInitialTimePlayerOne(false);
    setInitialTimePlayerTwo(false);
    setPauseAllTimer(false);
    setPauseTimerPlayerTwo(true);
    setPlayerTwoIncrement(0);
  };

  // Start Timer Player Two
  const startTimerPlayerTwo = () => {
    setInitialTimePlayerOne(false);
    setInitialTimePlayerTwo(false);
    setPauseAllTimer(false);
    setPauseTimerPlayerOne(true);
    setPlayerOneIncrement(0);
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
    }

    const lastDigit1Str = String(P1secs).slice(-1);
    const lastDigit1Num = Number(lastDigit1Str);

    for (let i = 0; i <= 100; i++) {
      if (i === playerOneIncrement) {
        if (P1secs >= 60 - playerOneIncrement && playerOneIncrement !== 0) {
          setTimePlayerOne([
            P1hrs,
            P1mins + 1,
            Math.abs(lastDigit1Num + i - 10),
          ]);
        }

        if (P1mins >= 60 - playerOneIncrement && playerOneIncrement !== 0) {
          setTimePlayerOne([P1hrs + 1, 0, Math.abs(lastDigit1Num + i - 10)]);
        }

        if (playerOneIncrement >= 12) {
          if (P1secs >= 60 - playerOneIncrement && playerOneIncrement !== 0) {
            setTimePlayerOne([
              P1hrs,
              P1mins + 1,
              Math.abs(lastDigit1Num + i - 20),
            ]);
          }

          if (P1secs >= 50 && playerOneIncrement !== 0) {
            setTimePlayerOne([
              P1hrs,
              P1mins + 1,
              Math.abs(lastDigit1Num + i - 10),
            ]);
          }

          if (P1mins >= 60 - playerOneIncrement && playerOneIncrement !== 0) {
            setTimePlayerOne([P1hrs + 1, 0, Math.abs(lastDigit1Num + i - 20)]);
          }

          if (P1mins >= 50 && playerOneIncrement !== 0) {
            setTimePlayerOne([P1hrs + 1, 0, Math.abs(lastDigit1Num + i - 10)]);
          }
        }
      }
    }
  }, [pauseTimerPlayerOne, playerOneIncrement]);

  // Player Two Increment
  useEffect(() => {
    if (pauseTimerPlayerTwo) {
      setTimePlayerTwo([P2hrs, P2mins, P2secs + playerTwoIncrement]);
    }

    const lastDigit1Str = String(P2secs).slice(-1);
    const lastDigit1Num = Number(lastDigit1Str);

    for (let i = 0; i <= 100; i++) {
      if (i === playerTwoIncrement) {
        if (P2secs >= 60 - playerTwoIncrement && playerTwoIncrement !== 0) {
          setTimePlayerTwo([
            P2hrs,
            P2mins + 1,
            Math.abs(lastDigit1Num + i - 10),
          ]);
        }

        if (P2mins >= 60 - playerTwoIncrement && playerTwoIncrement !== 0) {
          setTimePlayerTwo([P2hrs + 1, 0, Math.abs(lastDigit1Num + i - 10)]);
        }

        if (playerTwoIncrement >= 12) {
          if (P2secs >= 60 - playerTwoIncrement && playerTwoIncrement !== 0) {
            setTimePlayerTwo([
              P2hrs,
              P2mins + 1,
              Math.abs(lastDigit1Num + i - 20),
            ]);
          }

          if (P2secs >= 50 && playerTwoIncrement !== 0) {
            setTimePlayerTwo([
              P2hrs,
              P2mins + 1,
              Math.abs(lastDigit1Num + i - 10),
            ]);
          }

          if (P2mins >= 60 - playerTwoIncrement && playerTwoIncrement !== 0) {
            setTimePlayerTwo([P2hrs + 1, 0, Math.abs(lastDigit1Num + i - 20)]);
          }

          if (P2mins >= 50 && playerTwoIncrement !== 0) {
            setTimePlayerTwo([P2hrs + 1, 0, Math.abs(lastDigit1Num + i - 10)]);
          }
        }
      }
    }
  }, [pauseTimerPlayerTwo, playerTwoIncrement]);

  useEffect(() => {
    document.getElementsByTagName("body")[0].className =
      styles["clock-background"];

    () => {
      document.getElementsByTagName("body")[0].className = "unset";
    };
  }, []);

  return (
    <>
      <div
        className={styles["clock-wrapper"]}
        style={{ height: `${height}px` }}
      >
        <button
          className={
            pauseTimerPlayerOne
              ? styles["timer-button-top-active"]
              : styles["timer-button-top"]
          }
          onClick={initialTimePlayerTwo ? startTimerPlayerTwo : playerTwoPause}
          disabled={
            pauseTimerPlayerTwo || (pauseAllTimer && pauseTimerPlayerOne)
          }
        >
          {`${P2hrs.toString().padStart(2, "0")}:${P2mins.toString().padStart(
            2,
            "0"
          )}:${P2secs.toString().padStart(2, "0")}`}
        </button>

        <div className={styles["clock-settings"]}>
          <button
            onClick={pauseAllTimer ? allTimerResume : allTimerPause}
            disabled={initialTimePlayerOne || initialTimePlayerTwo}
            className={
              initialTimePlayerOne || initialTimePlayerTwo
                ? styles["play-pause-icon-disabled"]
                : styles["play-pause-icon"]
            }
          >
            <img src={pauseAllTimer ? "/play.svg" : "/pause.svg"} alt="Pause" />
          </button>
          <button
            className={styles["settings-icon"]}
            onClick={openSettingsModal}
          >
            <img src="/settings.svg" alt="Settings" />
          </button>
        </div>

        <button
          className={
            pauseTimerPlayerTwo
              ? styles["timer-button-bottom-active"]
              : styles["timer-button-bottom"]
          }
          onClick={initialTimePlayerOne ? startTimerPlayerOne : playerOnePause}
          disabled={
            pauseTimerPlayerOne || (pauseAllTimer && pauseTimerPlayerTwo)
          }
        >
          {`${P1hrs.toString().padStart(2, "0")}:${P1mins.toString().padStart(
            2,
            "0"
          )}:${P1secs.toString().padStart(2, "0")}`}
        </button>
      </div>

      {settingsModal && (
        <SettingsModal
          closeSettingsModal={closeSettingsModal}
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
        />
      )}
    </>
  );
};

export default Clock;
