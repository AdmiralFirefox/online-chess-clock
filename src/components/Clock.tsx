import { useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/Clock.module.scss";

const Clock = (): JSX.Element => {
  const { height } = useWindowSize();

  useEffect(() => {
    document.getElementsByTagName("body")[0].className =
      styles["clock-background"];

    () => {
      document.getElementsByTagName("body")[0].className = "unset";
    };
  }, []);

  return (
    <div className={styles["clock-wrapper"]} style={{ height: `${height}px` }}>
      <button className={styles["timer-button-top"]}>00:19.21</button>

      <div className={styles["clock-settings"]}>
        <button>
          <img src="/pause.svg" alt="Pause" />
        </button>
        <button>
          <img src="/settings.svg" alt="Settings" />
        </button>
      </div>

      <button className={styles["timer-button-bottom"]}>30:00</button>
    </div>
  );
};

export default Clock;
