import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutClub from './pages/AboutClub';
import AboutCollege from './pages/AboutCollege';
import Events from './pages/EventsPage';
import Team from './pages/Team';
import Contact from './pages/Contact';
import EventsPage from './pages/EventsPage';
import IntraHackathonPage from './pages/IntraHackathonPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-club" element={<AboutClub />} />
            <Route path="/about-college" element={<AboutCollege />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/intra-hackathon" element={<IntraHackathonPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;