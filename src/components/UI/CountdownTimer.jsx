import React, { useState, useEffect } from "react";

const CountdownTimer = ({ expiryDate }) => {
  const [countdown, setCountdown] = useState(
    Math.floor((expiryDate - Date.now()) / 1000)
  );
  const updateCountdown = () => {
    const newCountdown = Math.floor((expiryDate - Date.now()) / 1000);
    setCountdown(newCountdown);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  const formatCountdown = (countdown) => {
    const hours = Math.floor(countdown / (60 * 60));
    const minutes = Math.floor((countdown % (60 * 60)) / 60);
    const seconds = Math.floor(countdown % 60);

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatCountdown(countdown);

  return (
    <div>
      <span>{hours}</span>h <span>{minutes}</span>m<span>{seconds}</span>s
    </div>
  );
};

export default CountdownTimer;
