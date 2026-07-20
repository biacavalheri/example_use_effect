import { useEffect, useState } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Relógio Digital</h1>

      <h2>{currentTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;