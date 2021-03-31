import { useEffect } from 'react';
import { path } from './constants';

function App() {
  // const [data, setData] = useState(null);

  useEffect(() => {
    fetch(path.data)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App" />
  );
}

export default App;
