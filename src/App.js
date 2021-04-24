import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '이순신' },
  ];

  const [users, setUsers] = useState(sample); // 레퍼런스 변경되야 동작!!

  const download = () => {
    // fetch().then().then()
    setUsers([...sample, { id: num, name: '조자룡' }]);
    setNum(num + 1);
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id}, {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
