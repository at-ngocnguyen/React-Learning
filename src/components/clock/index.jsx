import React, { useState, useEffect } from 'react';

function formatDate() {
  const date = new Date();
  if (!date) return '';
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  // String.slide() => sẽ lấy các ký tự trong chuỗi tùy theo tham số được truyền
  // Ở ví dụ này cần phải show ra là  00:00:00 thay vì 0:0:0 nên sẽ giải quyết bằng phương pháp
  // Thêm số không ở trước để ra 3 ký tự và lấy 2 ký tự cuối ví dụ 030 => 30 , 002 => 02
  return `${hours}:${minutes}:${seconds}`;
}

function ClockReal(props) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const inTerVal = setInterval(() => {
      const newTime = formatDate();
      setTime(newTime);
    }, 1000)
    return () => {
      clearInterval(inTerVal);
    }
  }, [])
  // Khi sử dụng các Inverval() hoặc setTimeout() khi unMount component sẽ sảy ra lỗi https://prnt.sc/u4zr85
  // Nên phải clear để tránh ảnh hưởng tới hiệu suất component
  return (
    <div className="real">
      <p>{time}</p>
      <p>real</p>
    </div>
  );
}

export default ClockReal;
