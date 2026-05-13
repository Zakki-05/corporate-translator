import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Dictionary from './pages/Dictionary';
import Flashcards from './pages/Flashcards';
import Leaderboard from './pages/Leaderboard';
import MatchGame from './pages/MatchGame';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';

// Layout wrapper for animations
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden selection:bg-accent-purple/30">
      <div className="fixed inset-0 bg-mesh z-0" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0" />
      
      <AnimatePresence mode='wait'>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 border-4 border-accent-purple border-t-transparent rounded-full mb-4"
            />
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl font-bold tracking-widest text-gradient"
            >
              DECODING CORPORATE...
            </motion.h2>
          </motion.div>
        ) : (
          <div className="relative z-10">
            <ParticleBackground />
            <CustomCursor />
            
            <AnimatePresence mode='wait'>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/quiz" element={<PageWrapper><Quiz /></PageWrapper>} />
                <Route path="/dictionary" element={<PageWrapper><Dictionary /></PageWrapper>} />
                <Route path="/flashcards" element={<PageWrapper><Flashcards /></PageWrapper>} />
                <Route path="/leaderboard" element={<PageWrapper><Leaderboard /></PageWrapper>} />
                <Route path="/match-game" element={<PageWrapper><MatchGame /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
