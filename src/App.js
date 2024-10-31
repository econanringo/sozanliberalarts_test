import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Entry from './pages/Entry';
import Guidelines from './pages/Guidelines';
import News from './pages/News';
import Posts from './pages/Posts';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entry" element={<Entry />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/news" element={<News />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;