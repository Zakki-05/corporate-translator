import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { corporateWords } from '../data/corporateWords';
import { HiClock, HiCheck, HiX, HiArrowRight, HiRefresh, HiLightningBolt } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Fisher-Yates Shuffle
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const Quiz = () => {
  // --- STATE ---
  const [currentStep, setCurrentStep] = useState('welcome'); // welcome, quiz, result
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [stats, setStats] = useState({ correct: 0, wrong: 0, skipped: 0 });
  const [timerActive, setTimerActive] = useState(false);

  // --- LOGIC ---

  const initQuiz = () => {
    // Balanced selection of 10 words
    const pool = [...corporateWords];
    const shuffled = shuffleArray(pool).slice(0, 50).map(q => ({
      ...q,
      shuffledOptions: shuffleArray(q.options)
    }));

    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setStats({ correct: 0, wrong: 0, skipped: 0 });
    setIsAnswered(false);
    setSelectedOption(null);
    setTimeLeft(20);
    setTimerActive(true);
    setCurrentStep('quiz');
  };

  // Timer Effect
  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0 && !isAnswered) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [timerActive, timeLeft, isAnswered]);

  const handleTimeout = () => {
    setIsAnswered(true);
    setTimerActive(false);
    setStats(prev => ({ ...prev, skipped: prev.skipped + 1 }));
  };

  const handleAnswer = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    setTimerActive(false);

    const isCorrect = option === questions[currentIndex].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 100 + (timeLeft * 10));
      setStats(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setStats(prev => ({ ...prev, wrong: prev.wrong + 1 }));
    }
  };

  const nextQuestion = () => {
    if (currentIndex < 49) {
      setCurrentIndex(prev => prev + 1);
      setIsAnswered(false);
      setSelectedOption(null);
      setTimeLeft(20);
      setTimerActive(true);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setTimerActive(false);
    setCurrentStep('result');
    const history = JSON.parse(localStorage.getItem('corpLeaderboard') || '[]');
    const newEntry = {
      name: "Trainee #" + Math.floor(Math.random() * 1000),
      score,
      date: new Date().toISOString(),
      rank: getBadge(score).name
    };
    localStorage.setItem('corpLeaderboard', JSON.stringify([newEntry, ...history].slice(0, 10)));
  };

  const getBadge = (s) => {
    if (s >= 1800) return { name: "Corporate Language Master", icon: "👑", color: "text-yellow-500" };
    if (s >= 1400) return { name: "Startup Strategist", icon: "🚀", color: "text-accent-cyan" };
    if (s >= 1000) return { name: "Office Communicator", icon: "📞", color: "text-accent-purple" };
    return { name: "Meeting Room Survivor", icon: "💼", color: "text-white/40" };
  };

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-6 max-w-4xl min-h-[85vh] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          
          {/* STEP: WELCOME */}
          {currentStep === 'welcome' && (
            <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center px-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-10 border border-accent-purple/30">
                <HiLightningBolt className="text-4xl md:text-5xl text-accent-purple" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 italic tracking-tighter">THE <span className="text-gradient">CRUCIBLE</span></h1>
              <p className="text-white/40 text-lg md:text-xl mb-8 md:mb-12 max-w-lg mx-auto">Decode 50 corporate buzzwords under pressure. <br className="hidden md:block" />No sign-up. No friction. Just the truth.</p>
              
              <button 
                onClick={initQuiz} 
                className="btn-primary w-full sm:w-auto px-12 md:px-16 py-5 md:py-6 text-xl md:text-2xl shadow-2xl shadow-accent-purple/20"
              >
                Start Quiz Now
              </button>
            </motion.div>
          )}

          {/* STEP: QUIZ */}
          {currentStep === 'quiz' && questions[currentIndex] && (
            <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                  <motion.div className="h-full bg-accent-purple" initial={{ width: 0 }} animate={{ width: `${(currentIndex + 1) * 2}%` }} />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10 md:mb-12">
                   <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-accent-cyan font-bold text-[10px] md:text-xs uppercase tracking-widest">Question {currentIndex + 1}/50</span>
                        <span className="text-[9px] md:text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10 text-white/40">{questions[currentIndex].category}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold leading-tight">{questions[currentIndex].quizQuestion}</h2>
                   </div>
                   <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0 self-center md:self-start">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="28" className="stroke-white/5 md:hidden" strokeWidth="4" fill="transparent" />
                        <circle cx="40" cy="40" r="34" className="stroke-white/5 hidden md:block" strokeWidth="6" fill="transparent" />
                        
                        {/* Mobile Circle */}
                        <motion.circle cx="32" cy="32" r="28" className={`${timeLeft <= 5 ? 'stroke-red-500' : 'stroke-accent-purple'} md:hidden`} strokeWidth="4" fill="transparent" strokeDasharray={175} animate={{ strokeDashoffset: 175 - (175 * timeLeft) / 20 }} transition={{ duration: 1, ease: "linear" }} />
                        
                        {/* Desktop Circle */}
                        <motion.circle cx="40" cy="40" r="34" className={`${timeLeft <= 5 ? 'stroke-red-500' : 'stroke-accent-purple'} hidden md:block`} strokeWidth="6" fill="transparent" strokeDasharray={214} animate={{ strokeDashoffset: 214 - (214 * timeLeft) / 20 }} transition={{ duration: 1, ease: "linear" }} />
                      </svg>
                      <span className={`absolute font-mono text-xl md:text-2xl font-bold ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-white'}`}>{timeLeft}</span>
                   </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {questions[currentIndex].shuffledOptions.map((opt, i) => (
                    <button key={i} disabled={isAnswered} onClick={() => handleAnswer(opt)} className={`p-5 md:p-6 rounded-xl md:rounded-2xl border-2 text-left transition-all flex justify-between items-center group ${!isAnswered ? 'border-white/5 bg-white/5 hover:border-accent-purple/30' : opt === questions[currentIndex].correctAnswer ? 'border-emerald-500 bg-emerald-500/10' : selectedOption === opt ? 'border-red-500 bg-red-500/10' : 'border-white/5 opacity-50'}`}>
                       <span className="text-base md:text-lg">{opt}</span>
                       {isAnswered && opt === questions[currentIndex].correctAnswer && <HiCheck className="text-emerald-500 text-2xl" />}
                       {isAnswered && selectedOption === opt && opt !== questions[currentIndex].correctAnswer && <HiX className="text-red-500 text-2xl" />}
                    </button>
                  ))}
                </div>

                {/* Feedback & Next Button */}
                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                      <div className="text-left">
                         <p className={`text-lg font-bold mb-1 ${selectedOption === questions[currentIndex].correctAnswer ? 'text-emerald-500' : 'text-red-500'}`}>
                           {selectedOption === questions[currentIndex].correctAnswer ? "Correct!" : "Incorrect!"}
                         </p>
                         <p className="text-white/40 italic text-sm">
                           {selectedOption === questions[currentIndex].correctAnswer 
                             ? "Perfect alignment! You sound like a VP already." 
                             : `Let's circle back. The correct answer was: ${questions[currentIndex].correctAnswer}`}
                         </p>
                      </div>
                      
                      <button 
                        onClick={nextQuestion}
                        className="btn-primary px-10 py-4 flex items-center group whitespace-nowrap"
                      >
                        {currentIndex < 49 ? "Next Challenge" : "Finish Session"}
                        <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
            </motion.div>
          )}

          {/* STEP: RESULT */}
          {currentStep === 'result' && (
            <motion.div key="result" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] border-white/10 text-center">
              <div className="text-6xl md:text-7xl mb-6">{getBadge(score).icon}</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2">Session Complete</h2>
              <p className={`text-xl md:text-2xl font-bold mb-8 ${getBadge(score).color}`}>{getBadge(score).name}</p>
              
              <div className="bg-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl mb-10 md:mb-12 border border-white/5 inline-block mx-auto w-full max-w-xs">
                 <p className="text-white/20 text-[10px] mb-3 uppercase tracking-[0.5em]">Final Assessment</p>
                 <div className="text-5xl md:text-6xl font-black text-gradient">{score} PTS</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto mb-10 md:mb-12">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-emerald-500 text-xl font-bold">{stats.correct}</p>
                    <p className="text-[10px] text-white/20 uppercase font-bold tracking-widest">Correct</p>
                 </div>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-red-500 text-xl font-bold">{stats.wrong}</p>
                    <p className="text-[10px] text-white/20 uppercase font-bold tracking-widest">Wrong</p>
                 </div>
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-white text-xl font-bold">{(stats.correct/50)*100}%</p>
                    <p className="text-[10px] text-white/20 uppercase font-bold tracking-widest">Accuracy</p>
                 </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => setCurrentStep('welcome')} className="btn-primary flex items-center justify-center py-4 px-8"><HiRefresh className="mr-2" /> New Session</button>
                <button onClick={() => window.location.href = '/leaderboard'} className="btn-secondary py-4 px-8">Rankings</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Quiz;
