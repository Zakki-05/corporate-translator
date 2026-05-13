import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiTrendingUp, HiAcademicCap, HiFire, HiRefresh } from 'react-icons/hi';
import Navbar from '../components/Navbar';

const Result = ({ score, stats, questionsCount }) => {
  const percentage = (stats.correct / questionsCount) * 100;
  
  const getRank = () => {
    if (percentage === 100) return { title: "Corporate Language Master", icon: <HiFire className="text-orange-500" />, badge: "Elite" };
    if (percentage >= 80) return { title: "Startup Strategist", icon: <HiAcademicCap className="text-purple-500" />, badge: "Pro" };
    if (percentage >= 50) return { title: "Meeting Room Survivor", icon: <HiTrendingUp className="text-accent-cyan" />, badge: "Competent" };
    return { title: "Corporate Beginner", icon: <HiAcademicCap className="text-white/40" />, badge: "Junior" };
  };

  const rank = getRank();

  useEffect(() => {
    // Save to local storage for leaderboard
    const user = localStorage.getItem('corpUser') || 'Anonymous';
    const history = JSON.parse(localStorage.getItem('corpLeaderboard') || '[]');
    history.push({ name: user, score, date: new Date().toISOString(), rank: rank.title });
    history.sort((a, b) => b.score - a.score);
    localStorage.setItem('corpLeaderboard', JSON.stringify(history.slice(0, 10)));
  }, [score, rank.title]);

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl w-full glass p-8 sm:p-16 rounded-[3rem] border-white/10 text-center relative overflow-hidden"
        >
          {/* Confetti Effect Mockup */}
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-0 left-1/4 w-2 h-2 bg-accent-purple rounded-full blur-[1px] animate-bounce" />
             <div className="absolute top-10 right-1/4 w-2 h-2 bg-accent-cyan rounded-full blur-[1px] animate-bounce delay-100" />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 10 }}
              className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 text-6xl border-2 border-white/10"
            >
              {rank.icon}
            </motion.div>

            <h1 className="text-5xl font-extrabold mb-4">Quiz <span className="text-gradient">Complete!</span></h1>
            <p className="text-white/40 text-xl mb-12">Your score: <span className="text-white font-mono font-bold">{score}</span></p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 glass rounded-2xl border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Accuracy</p>
                <p className="text-3xl font-bold">{percentage}%</p>
              </div>
              <div className="p-6 glass rounded-2xl border-accent-purple/20 bg-accent-purple/5">
                <p className="text-[10px] uppercase tracking-widest text-accent-purple mb-2">Current Rank</p>
                <p className="text-xl font-bold text-accent-purple">{rank.title}</p>
              </div>
              <div className="p-6 glass rounded-2xl border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Correct</p>
                <p className="text-3xl font-bold text-emerald-500">{stats.correct}/10</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.location.reload()} className="btn-primary flex items-center justify-center space-x-2">
                <HiRefresh />
                <span>Try Again</span>
              </button>
              <button onClick={() => window.location.href = '/leaderboard'} className="btn-secondary">
                View Leaderboard
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Result;
