import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(0);

  // 실행시점: (1) App() 함수가 최초 실행될 때 ((마운트 될 때)
  useEffect(() => {
    console.log('useEffect 실행됨');
  });

  return <div></div>;
}

export default App;
