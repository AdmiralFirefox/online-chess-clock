import { useState } from "react";

const usePlayerTime = () => {
  const [playerOneHours, setPlayerOneHours] = useState(0);
  const [playerOneMinutes, setPlayerOneMinutes] = useState(10);
  const [playerOneSeconds, setPlayerOneSeconds] = useState(0);

  const [playerTwoHours, setPlayerTwoHours] = useState(0);
  const [playerTwoMinutes, setPlayerTwoMinutes] = useState(10);
  const [playerTwoSeconds, setPlayerTwoSeconds] = useState(0);

  const [customIncrement, setCustomIncrement] = useState(0);

  return {
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
  };
};

export default usePlayerTime;
