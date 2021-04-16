import { useEffect, useState } from 'react';
import './App.css';
import Tab from './components/Tap';

// https://api.github.com/orgs/godaddy/repos

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/orgs/godaddy/repos')
    .then((response) => response.json())
    .then(setData);
  }, []);

  // Mobile View
  if (data) {
    const dataObject = data.map((element, i) => ({id: i, data: element}));
    return (
      <div className="App">
        <header className='top-header'><p>Godaddy Git Repository</p></header>
        {dataObject.map((value) => <div className='App-Tab'> <Tab key={value.id} repo={value.data} /> </div>)}
      </div>
    );
  }

  return (
    <>No data</>
  );
}

export default App;