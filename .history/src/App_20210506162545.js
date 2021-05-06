import { useRef, useState } from 'react';
import './App.css';

// useRef (디자인)
// dom을 변경할 때 사용

function App() {
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: '길동' },
    { id: 2, name: '천호' },
  ]);
  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef.current);
          myRef.current.style.backgroundColor = 'red';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}>박스</div>
    </div>
  );
}

export default App;
