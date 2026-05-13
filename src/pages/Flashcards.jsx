import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { corporateWords } from '../data/corporateWords';
import { HiChevronLeft, HiChevronRight, HiRefresh } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Flashcard = ({ card, isFlipped, setIsFlipped }) => {
  return (
    <div 
      className="relative w-full max-w-xl h-[450px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full transform-style-3d shadow-2xl rounded-[3rem]"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center border-2 border-white/10">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-10 border border-white/10">
             <HiRefresh className="text-3xl text-accent-cyan animate-spin-slow" />
          </div>
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-accent-cyan mb-4">Corporate Term</span>
          <h3 className="text-5xl font-extrabold mb-6 tracking-tight">{card.word}</h3>
          <p className="text-white/40 italic text-sm">Click to reveal the cold truth</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden bg-[#0c0c1e] border-2 border-accent-purple/30 rounded-[3rem] p-12 flex flex-col justify-center transform rotate-y-180">
          <div className="mb-8">
            <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest block mb-2">The Dictionary Says</span>
            <p className="text-white text-lg font-medium leading-relaxed">{card.meaning}</p>
          </div>
          
          <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/5">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-2">Example</span>
            <p className="text-white/60 text-sm italic">"{card.example || `Let's use ${card.word} in our next meeting.`}"</p>
          </div>

          <div className="p-6 bg-accent-purple/10 rounded-2xl border border-accent-purple/20">
            <span className="text-[10px] font-bold text-accent-purple uppercase tracking-widest block mb-2">Reality Check</span>
            <p className="text-white text-lg font-bold leading-tight">{card.translation}</p>
          </div>
        </div>
      </motion.div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}} />
    </div>
  );
};

const Flashcards = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => setIndex((prev) => (prev + 1) % corporateWords.length), 150);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => setIndex((prev) => (prev - 1 + corporateWords.length) % corporateWords.length), 150);
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center pt-20 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Word <span className="text-gradient">Flashcards</span></h1>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold">
            Card {index + 1} of {corporateWords.length}
          </p>
        </div>

        <div className="w-full flex items-center justify-center gap-4 sm:gap-12">
          <button 
            onClick={prevCard}
            className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl hover:bg-accent-purple transition-all hidden sm:flex"
          >
            <HiChevronLeft />
          </button>

          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-xl"
            >
              <Flashcard card={corporateWords[index]} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={nextCard}
            className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl hover:bg-accent-purple transition-all hidden sm:flex"
          >
            <HiChevronRight />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden gap-6 mt-12">
          <button onClick={prevCard} className="w-16 h-16 rounded-full glass flex items-center justify-center text-3xl">
            <HiChevronLeft />
          </button>
          <button onClick={nextCard} className="w-16 h-16 rounded-full glass flex items-center justify-center text-3xl">
            <HiChevronRight />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Flashcards;
