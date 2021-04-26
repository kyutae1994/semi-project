import { cleanup } from '@testing-library/react';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [input]);

  return <div></div>;
}

export default App;
