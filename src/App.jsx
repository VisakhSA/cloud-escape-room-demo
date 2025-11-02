import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import News from './pages/News';
import './App.css';
import './styles/neon.css';

function App() {
  const [participantName] = useState('Visakh'); // Replace with actual participant name

  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white font-orbitron">
        <Header participantName={participantName} />
        <Routes>
          <Route path="/" element={<Home participantName={participantName} />} />
          <Route path="/projects" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
