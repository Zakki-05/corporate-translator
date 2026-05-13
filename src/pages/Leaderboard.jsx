import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiUserCircle } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('corpLeaderboard') || '[]');
    setScores(history);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-yellow-500/30"
          >
            <HiLightningBolt className="text-4xl text-yellow-500" />
          </motion.div>
          <h1 className="text-5xl font-bold mb-4">The <span className="text-gradient">Boardroom</span></h1>
          <p className="text-white/40">Top performers in Corporate Bullshit Bingo.</p>
        </div>

        <div className="glass rounded-[2rem] border-white/10 overflow-hidden">
          <div className="p-8 border-b border-white/5 bg-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-white/40">
             <span>Player</span>
             <div className="flex space-x-20 mr-10">
               <span>Rank</span>
               <span>Score</span>
             </div>
          </div>

          <div className="divide-y divide-white/5">
            {scores.length > 0 ? (
              scores.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 flex justify-between items-center hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center space-x-6">
                    <span className={`text-2xl font-bold font-mono ${i < 3 ? 'text-accent-cyan' : 'text-white/20'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center space-x-4">
                      <HiUserCircle className="text-4xl text-white/10 group-hover:text-accent-purple transition-colors" />
                      <div>
                        <p className="font-bold text-lg">{entry.name}</p>
                        <p className="text-[10px] text-white/30 uppercase tracking-widest">{new Date(entry.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-12 items-center text-right">
                    <span className="text-xs font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10 hidden sm:block">
                      {entry.rank}
                    </span>
                    <span className="text-2xl font-bold text-accent-purple font-mono">
                      {entry.score}
                    </span>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="p-20 text-center text-white/20 italic text-xl">
                The leaderboard is empty. Be the first to conquer the corporate world!
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
           <button onClick={() => window.location.href = '/quiz'} className="btn-primary">
             Start a New Session
           </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Leaderboard;
