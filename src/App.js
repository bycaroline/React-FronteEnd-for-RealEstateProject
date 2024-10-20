
import './App.css';
import StartPage from './pages/StartPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateCompany from './components/CreateCompany';
import CreateHouse from './components/CreateHouse';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/skapaforetag" element={<CreateCompany />} />
        <Route path="/skapahus" element={<CreateHouse />} />
      </Routes>
    </Router>
  );
}

export default App;
