import { useState, useEffect, useRef } from 'react';

function randomColor(curentColor) {
  const COLOR_LIST = ['red', 'green', 'yellow', 'blue'];
  const currentIndex = COLOR_LIST.indexOf(curentColor);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 4);
    // newIndex sẽ được tính như sau
    // Lấy 1 số từ 0 đến 1 nhân với 3 rồi loại bỏ số đuôi với Math.trunc
  }

  return COLOR_LIST[newIndex];
}
// Vấn đề được đặt ra trong bài này:
// Vì useEffect chỉ chạy một lần, nhưng lại setTimeout() liên tục dẫn tới
// giá trị color sẽ luôn được trả lại 'transparent' rồi mới chạy biến được khởi tạo mới
// trong setTimeout(), có thể truyền dependencies là color cho useEffect() nhưng sẽ dẫn
// tới việc clear và set Timeout liên tục ảnh hưởn tới performance
// => Cách giải quyết tạo một colorRef sử dụng useRef để lưu giá trị hiện tại và để can thiệp debounce rồi đem đi so sánh
// |=> dùng indexOf để tìm vị trí bị trùng trong mảng sẵn có với giá trị được tham chiếu (colorRef)
// Sẽ khởi tạo lại màu mới cho đến khi hết bị trùng

function useMagicColor(props) {
  const [color, setColor] = useState('transparent');
  const colorRef = useRef('transparent');
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000)
    return () => {
      clearInterval(colorInterval);
    }
  }, []);
  return color;
}

export default useMagicColor;
