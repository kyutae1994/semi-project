import { useEffect } from 'react';
import './App.css';

function App() {
  // 실행시점: (1) App() 함수가 최초 실행될 때
  useEffect(() => {
    console.log('useEffect 실행됨');
  });

  return <div></div>;
}

export default App;
