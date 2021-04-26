import { useState } from 'react';
import './App.css';

// useMemo => 메모라이제이션(기억)

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);

  return (
    <div>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
