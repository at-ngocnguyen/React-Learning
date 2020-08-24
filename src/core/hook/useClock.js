import { useEffect, useState } from 'react';


function formatDate() {
  const date = new Date();
  if (!date) return '';
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}
function useClock(props) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const inTerVal = setInterval(() => {

      const newTime = formatDate();

      setTime(newTime);
    }, 1000)
    return () => {
      clearInterval(inTerVal);
    }
  }, []);

  return { time }
}

export default useClock;
