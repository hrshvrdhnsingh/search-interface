/* eslint-disable no-unused-vars */
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Result from './components/Result';
import NavigatorButton from './components/NavigatorButton';

function App() {
  //const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-NLK4FS4CC0', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <div className='flex justify-between flex-col w-screen'>
      <Navbar />
      <Routes>
        <Route exact path='/home' element={<Result />} />
        <Route path="/" element={<Navigate to="/search" />} />
        <Route exact path='/search' element={<Result />} />
        <Route exact path='/images' element={<Result />} />
        <Route exact path='/news' element={<Result />} />
        <Route exact path='/videos' element={<Result />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
