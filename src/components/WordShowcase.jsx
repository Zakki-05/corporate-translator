import React from 'react';
import { motion } from 'framer-motion';

const words = [
  {
    word: "Circle Back",
    meaning: "To revisit a topic at a later time.",
    translation: "I don't have the answer right now, and I hope you forget you asked.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    word: "Bandwidth",
    meaning: "The capacity to handle a specific workload.",
    translation: "I'm already doing three people's jobs and I'm about to cry.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    word: "Deep Dive",
    meaning: "An extensive analysis of a specific topic.",
    translation: "We're going to spend 2 hours looking at a spreadsheet nobody understands.",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    word: "Low Hanging Fruit",
    meaning: "Easily achievable goals or tasks.",
    translation: "Things even Dave from marketing can't mess up.",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    word: "Synergy",
    meaning: "Combined action or operation.",
    translation: "A word managers use when they want us to work harder for free.",
    color: "from-indigo-500/20 to-blue-500/20"
  }
];

const WordShowcase = () => {
  return (
    <section id="words" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Corporate <span className="text-accent-cyan">Dictionary</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Translation: What they say vs. What they actually mean.</p>
        </div>
      </div>

      <div className="flex space-x-6 overflow-x-hidden group">
        <motion.div 
          className="flex space-x-6 animate-scroll"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...words, ...words].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`flex-shrink-0 w-80 p-8 rounded-3xl glass border-white/5 bg-gradient-to-br ${item.color} group/card`}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-accent-cyan mb-4">Corporate Word</div>
              <h3 className="text-2xl font-bold mb-2 group-hover/card:text-accent-cyan transition-colors">{item.word}</h3>
              <p className="text-white/60 text-sm mb-6 italic">"{item.meaning}"</p>
              
              <div className="pt-6 border-t border-white/10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-accent-purple mb-2">Translation</div>
                <p className="text-white/90 font-medium">
                  {item.translation}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .animate-scroll {
          display: flex;
          width: max-content;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
};

export default WordShowcase;
