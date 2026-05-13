import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { corporateWords } from '../data/corporateWords';
import { HiLightningBolt, HiCheckCircle, HiRefresh } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Fisher-Yates Shuffle Algorithm
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const MatchGame = () => {
  const [gameWords, setGameWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedMeaning, setSelectedMeaning] = useState(null);
  const [matches, setMatches] = useState([]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('start'); // start, playing, finished

  const initGame = () => {
    const randomSet = shuffleArray(corporateWords).slice(0, 6);
    const words = randomSet.map(w => ({ id: w.id, text: w.corporateWord, type: 'word' }));
    const meanings = randomSet.map(w => ({ id: w.id, text: w.simpleHumanTranslation, type: 'meaning' }));
    
    setGameWords({
      words: shuffleArray(words),
      meanings: shuffleArray(meanings)
    });
    setMatches([]);
    setSelectedWord(null);
    setSelectedMeaning(null);
    setScore(0);
    setGameState('playing');
  };

  useEffect(() => {
    if (selectedWord && selectedMeaning) {
      if (selectedWord.id === selectedMeaning.id) {
        setMatches([...matches, selectedWord.id]);
        setScore(score + 50);
        setSelectedWord(null);
        setSelectedMeaning(null);
        if (matches.length + 1 === 6) {
          setGameState('finished');
        }
      } else {
        setTimeout(() => {
          setSelectedWord(null);
          setSelectedMeaning(null);
        }, 500);
      }
    }
  }, [selectedWord, selectedMeaning]);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-6 max-w-5xl text-center">
        <h1 className="text-5xl font-bold mb-4">Buzzword <span className="text-gradient">Match</span></h1>
        <p className="text-white/40 mb-12 uppercase tracking-widest text-xs font-bold">Match the buzzword to its cold truth.</p>

        {gameState === 'start' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20">
            <button onClick={initGame} className="btn-primary px-12 py-6 text-xl">Start Matching</button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Words Column */}
            <div className="space-y-4">
              <h3 className="text-accent-purple font-bold uppercase tracking-widest text-sm mb-6">Corporate Buzzwords</h3>
              {gameWords.words.map((w) => (
                <motion.button
                  key={w.id}
                  disabled={matches.includes(w.id)}
                  onClick={() => setSelectedWord(w)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all text-left font-bold text-lg
                    ${matches.includes(w.id) ? 'border-emerald-500/50 bg-emerald-500/10 opacity-50' : 
                      selectedWord?.id === w.id ? 'border-accent-purple bg-accent-purple/10' : 
                      'border-white/5 bg-white/5 hover:border-white/20'}`}
                >
                  <div className="flex justify-between items-center">
                    {w.text}
                    {matches.includes(w.id) && <HiCheckCircle className="text-emerald-500 text-2xl" />}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Meanings Column */}
            <div className="space-y-4">
              <h3 className="text-accent-cyan font-bold uppercase tracking-widest text-sm mb-6">Simple Truths</h3>
              {gameWords.meanings.map((m) => (
                <motion.button
                  key={m.id}
                  disabled={matches.includes(m.id)}
                  onClick={() => setSelectedMeaning(m)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all text-left font-medium
                    ${matches.includes(m.id) ? 'border-emerald-500/50 bg-emerald-500/10 opacity-50' : 
                      selectedMeaning?.id === m.id ? 'border-accent-cyan bg-accent-cyan/10' : 
                      'border-white/5 bg-white/5 hover:border-white/20'}`}
                >
                   {m.text}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {gameState === 'finished' && (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-20 glass rounded-[3rem] border-accent-purple/30 max-w-2xl mx-auto">
            <HiLightningBolt className="text-6xl text-yellow-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-2">Perfect Alignment!</h2>
            <p className="text-white/40 mb-8">You decoded the corporate world in record time.</p>
            <div className="text-6xl font-black text-accent-cyan mb-10">{score} PTS</div>
            <button onClick={initGame} className="btn-primary flex items-center mx-auto">
              <HiRefresh className="mr-2" /> Play Again
            </button>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MatchGame;
