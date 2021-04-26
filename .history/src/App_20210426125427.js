import './App.css';

function App() {
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]);

  return <div></div>;
}

export default App;
