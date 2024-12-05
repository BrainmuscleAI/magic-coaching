import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto w-full">
          <div className="max-w-5xl mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}