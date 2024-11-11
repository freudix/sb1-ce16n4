import React from 'react';
import Navbar from './components/Navbar';
import LiveStream from './components/LiveStream';
import Hero from './components/Hero';
import About from './components/About';
import NextStream from './components/NextStream';
import WatchPlatforms from './components/WatchPlatforms';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <LiveStream />
      <main>
        <Hero />
        <About />
        <NextStream />
        <WatchPlatforms />
      </main>
      <Footer />
    </div>
  );
}

export default App;