import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiClock, HiStar } from 'react-icons/hi';

const QuizPreview = () => {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const options = [
    { id: 'A', text: "A physical cable used for internet." },
    { id: 'B', text: "The amount of time/energy available for a task." },
    { id: 'C', text: "A type of office desk." },
    { id: 'D', text: "A new startup company." }
  ];

  const handleSelect = (id) => {
    setSelected(id);
    setIsCorrect(id === 'B');
  };

  return (
    <section id="quiz" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Quiz <span className="text-accent-purple">Preview</span></h2>
          <p className="text-white/50">Think you can survive a 10 AM Monday meeting?</p>
        </div>

        <div className="max-w-4xl mx-auto glass rounded-[2rem] p-4 sm:p-10 border-white/10 relative">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-purple/30 rounded-full blur-[60px]" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-cyan/30 rounded-full blur-[60px]" />

          {/* Quiz Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <HiClock className="text-accent-cyan text-xl" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-white/40">Time Left</p>
                <p className="font-mono text-xl font-bold text-accent-cyan">00:45</p>
              </div>
            </div>
            
            <div className="flex-1 max-w-xs w-full h-2 bg-white/5 rounded-full overflow-hidden mx-8">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '40%' }}
                className="h-full bg-gradient-to-r from-accent-purple to-accent-cyan"
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-white/40">Score</p>
                <p className="font-mono text-xl font-bold text-accent-purple">1250</p>
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <HiStar className="text-accent-purple text-xl" />
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-12 text-center sm:text-left">
            <span className="text-accent-purple font-bold text-sm mb-2 block tracking-widest uppercase">Question 4 of 10</span>
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
              What does "Bandwidth" mean in office communication?
            </h3>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((opt) => (
              <motion.button
                key={opt.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect(opt.id)}
                className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 flex items-center space-x-4
                  ${selected === opt.id 
                    ? (isCorrect && opt.id === 'B' ? 'border-emerald-500 bg-emerald-500/10' : 'border-red-500 bg-red-500/10') 
                    : 'border-white/5 bg-white/5 hover:border-white/20'}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm
                  ${selected === opt.id 
                    ? (isCorrect && opt.id === 'B' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white') 
                    : 'bg-white/10 text-white/60'}`}
                >
                  {opt.id}
                </div>
                <span className="flex-1 font-medium">{opt.text}</span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-10 p-6 rounded-2xl border-2 text-center
                  ${isCorrect ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-red-500/50 bg-red-500/5'}`}
              >
                <p className="font-bold text-lg mb-2">
                  {isCorrect ? "✅ Spot on!" : "❌ Not quite!"}
                </p>
                <p className="text-white/60 text-sm">
                  {isCorrect 
                    ? "Managers use this to politely say they have too much work to do." 
                    : "Actually, it's about capacity for work, not physical cables."}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default QuizPreview;
