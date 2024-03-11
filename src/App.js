
import { useState } from 'react';
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme? 'darkmode' : 'lightmode'}>
      <p className='text-5xl darkmode:bg-gray-900'>App</p>
    </div>
  );
}

export default App;
