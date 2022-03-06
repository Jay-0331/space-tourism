
import './App.css';
import Header from './components/header';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home';
import Destination from './components/destination';
import Crew from './components/crew';
import Technologies from './components/technologies';


function App() {
  const location = useLocation();

  return (
    <>
      <Header location = {location.pathname}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </>
  );
}

export default App;
