import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const currentTime = new Date()
      .toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      .slice(0, -3)
      .replace(/:/g, '');

    const interval = setInterval(() => {
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="inline-block py-2 text-sm tracking-widest">{time}</div>
  );
}
