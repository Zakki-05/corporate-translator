import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { HiArrowRight, HiLightningBolt } from 'react-icons/hi';

const FloatingWord = ({ text, delay, x, y, size = "text-sm" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.1, 1],
      x: [x, x + 20, x],
      y: [y, y - 30, y]
    }}
    transition={{ 
      duration: 5 + Math.random() * 5, 
      repeat: Infinity, 
      delay 
    }}
    className={`absolute pointer-events-none font-mono ${size} text-accent-purple/40 whitespace-nowrap hidden lg:block`}
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    {text}
  </motion.div>
);

const Hero = () => {
  const corporateWords = [
    "Synergy", "KPI", "Deep Dive", "Circle Back", "Pivot", 
    "Scalability", "Stakeholders", "Deliverables", "Alignment", "Bandwidth"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating Elements Background */}
      {corporateWords.map((word, i) => (
        <FloatingWord 
          key={word} 
          text={word} 
          delay={i * 0.5} 
          x={10 + (i * 12) % 80} 
          y={20 + (i * 15) % 60} 
          size={i % 2 === 0 ? "text-xl" : "text-sm"}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8 border-accent-purple/30"
        >
          <HiLightningBolt className="text-accent-purple" />
          <span className="text-xs font-bold tracking-widest uppercase">Weekend Session Open</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight"
        >
          Decode <span className="text-gradient">Corporate</span> <br />
          <span className="italic">Lingo</span> Like a Pro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Understand the confusing words used in{' '}
          <span className="text-white font-semibold">
            <Typewriter
              words={['Meetings', 'LinkedIn Posts', 'Startup Culture', 'IT Companies', 'Bullshit Bingo']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button className="btn-primary group flex items-center">
            Start Quiz
            <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary">
            Explore Dictionary
          </button>
        </motion.div>

        {/* Hero Card Visual */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 max-w-5xl mx-auto relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10" />
          <div className="glass rounded-3xl p-4 sm:p-8 border-white/5 overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-700">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
                <div className="space-y-4 p-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Email from HR: "Alignment Check"</h3>
                  <p className="text-white/40 italic">"We need to ensure everyone is on the same page regarding the pivot."</p>
                  <div className="p-4 bg-accent-purple/10 border border-accent-purple/20 rounded-xl">
                    <p className="text-accent-purple font-mono text-sm">TRANSLATION: "We are changing everything because the last idea failed."</p>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="w-64 h-64 bg-accent-blue/20 rounded-full blur-[100px] absolute" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 border-2 border-dashed border-accent-cyan/30 rounded-full flex items-center justify-center relative"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-full flex items-center justify-center text-4xl shadow-2xl shadow-accent-cyan/20">
                      🏢
                    </div>
                  </motion.div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4">Scroll to Decode</span>
          <div className="w-px h-16 bg-gradient-to-b from-accent-purple to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
