import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiRefresh } from 'react-icons/hi';

const cards = [
  {
    word: "Alignment",
    meaning: "Agreement or collaboration.",
    example: "We need to ensure everyone is in alignment.",
    translation: "We need to make sure everyone agrees with the boss so we don't get fired.",
    gradient: "from-blue-600 to-indigo-700"
  },
  {
    word: "Pivot",
    meaning: "A change in strategy or direction.",
    example: "Let's pivot our focus to the mobile market.",
    translation: "Our first plan failed miserably and we're panicking.",
    gradient: "from-purple-600 to-pink-700"
  },
  {
    word: "Deliverable",
    meaning: "A final product or result of a project.",
    example: "What are the key deliverables for Q3?",
    translation: "The stuff you have to finish by Friday so I can take credit for it.",
    gradient: "from-emerald-600 to-teal-700"
  }
];

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[400px] cursor-pointer perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full transform-style-3d shadow-2xl rounded-3xl"
      >
        {/* Front */}
        <div className={`absolute inset-0 backface-hidden bg-gradient-to-br ${card.gradient} rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-white/20`}>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
             <HiRefresh className="text-2xl animate-pulse" />
          </div>
          <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-70 mb-2">Corporate Term</span>
          <h3 className="text-4xl font-bold mb-4">{card.word}</h3>
          <p className="text-white/80 italic text-sm">Tap to reveal the truth</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden bg-dark-navy border-2 border-accent-purple/30 rounded-3xl p-8 flex flex-col justify-center transform rotate-y-180 bg-[#0a0a1a]">
          <div className="mb-6">
            <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest block mb-1">Official Meaning</span>
            <p className="text-white font-medium">{card.meaning}</p>
          </div>
          
          <div className="mb-6">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">Example</span>
            <p className="text-white/60 text-sm italic">"{card.example}"</p>
          </div>

          <div className="p-4 bg-accent-purple/10 rounded-xl border border-accent-purple/20">
            <span className="text-[10px] font-bold text-accent-purple uppercase tracking-widest block mb-1">Funny Translation</span>
            <p className="text-white text-sm font-semibold">{card.translation}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const FlashcardPreview = () => {
  return (
    <section id="flashcards" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">Learn With <span className="text-gradient">Flashcards</span></h2>
             <p className="text-white/50 mb-8 leading-relaxed text-lg">
               Our 3D interactive flashcards make memorization fun. Flip through terms and learn the real meanings behind office speak.
             </p>
             <button className="btn-secondary flex items-center group">
               View All Cards
               <motion.span 
                 animate={{ x: [0, 5, 0] }}
                 transition={{ repeat: Infinity, duration: 1.5 }}
                 className="ml-2"
               >
                 →
               </motion.span>
             </button>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {cards.map((card, i) => (
              <Flashcard key={i} card={card} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}} />
    </section>
  );
};

export default FlashcardPreview;
