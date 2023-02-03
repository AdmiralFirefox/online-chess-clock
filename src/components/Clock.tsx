import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/Clock.module.scss";

const Clock = (): JSX.Element => {
  const { height } = useWindowSize();

  const [initialTimePlayerOne, setInitialTimePlayerOne] = useState(true);
  const [initialTimePlayerTwo, setInitialTimePlayerTwo] = useState(true);

  const [pauseAllTimer, setPauseAllTimer] = useState(true);
  const [pauseTimerPlayerOne, setPauseTimerPlayerOne] = useState(false);
  const [pauseTimerPlayerTwo, setPauseTimerPlayerTwo] = useState(false);

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
  };

  // Pause Player Two Timer
  const playerTwoPause = () => {
    setPauseTimerPlayerTwo(!pauseTimerPlayerTwo);
    setPauseTimerPlayerOne(false);
    setPauseAllTimer(false);
  };

  // Start Timer Player One
  const startTimerPlayerOne = () => {
    setInitialTimePlayerOne(false);
    setInitialTimePlayerTwo(false);
    setPauseAllTimer(false);
    setPauseTimerPlayerTwo(true);
  };

  // Start Timer Player Two
  const startTimerPlayerTwo = () => {
    setInitialTimePlayerOne(false);
    setInitialTimePlayerTwo(false);
    setPauseAllTimer(false);
    setPauseTimerPlayerOne(true);
  };

  useEffect(() => {
    const timerIdPlayerOne = setInterval(() => PlayerOneTick(), 1000);
    const timerIdPlayerTwo = setInterval(() => PlayerTwoTick(), 1000);

    return () => {
      clearInterval(timerIdPlayerOne);
      clearInterval(timerIdPlayerTwo);
    };
  });

  useEffect(() => {
    document.getElementsByTagName("body")[0].className =
      styles["clock-background"];

    () => {
      document.getElementsByTagName("body")[0].className = "unset";
    };
  }, []);

  return (
    <div className={styles["clock-wrapper"]} style={{ height: `${height}px` }}>
      <button
        className={
          pauseTimerPlayerOne
            ? styles["timer-button-top-active"]
            : styles["timer-button-top"]
        }
        onClick={initialTimePlayerTwo ? startTimerPlayerTwo : playerTwoPause}
        disabled={pauseTimerPlayerTwo || (pauseAllTimer && pauseTimerPlayerOne)}
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
        >
          <img src={pauseAllTimer ? "/play.svg" : "/pause.svg"} alt="Pause" />
        </button>
        <button>
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
        disabled={pauseTimerPlayerOne || (pauseAllTimer && pauseTimerPlayerTwo)}
      >
        {`${P1hrs.toString().padStart(2, "0")}:${P1mins.toString().padStart(
          2,
          "0"
        )}:${P1secs.toString().padStart(2, "0")}`}
      </button>
    </div>
  );
};

export default Clock;
