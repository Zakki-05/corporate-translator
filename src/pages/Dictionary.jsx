import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { corporateWords } from '../data/corporateWords';
import { HiSearch, HiVolumeUp, HiClipboard, HiShare, HiHeart, HiOutlineHeart } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('corpFavs') || '[]'));

  const toggleFavorite = (id) => {
    const newFavs = favorites.includes(id) 
      ? favorites.filter(fid => fid !== id) 
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('corpFavs', JSON.stringify(newFavs));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const categories = ['All', ...new Set(corporateWords.map(w => w.category))];

  const filteredWords = corporateWords.filter(word => {
    const matchesSearch = word.corporateWord.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         word.meaning.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || word.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            Corporate Dictionary
          </motion.h1>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Browse through 50+ essential buzzwords. Tap the volume icon to hear how to sound important!
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <div className="relative">
            <HiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 text-2xl" />
            <input 
              type="text" 
              placeholder="Search for a buzzword..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-6 text-xl focus:outline-none focus:border-accent-purple/50 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all
                  ${selectedCategory === cat 
                    ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/30' 
                    : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredWords.map((word, i) => (
              <motion.div
                key={word.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="card-neon p-8 flex flex-col group relative"
              >
                {/* Actions */}
                <div className="absolute top-6 right-6 flex space-x-2">
                  <button onClick={() => toggleFavorite(word.id)} className="text-xl text-white/20 hover:text-red-500 transition-colors">
                    {favorites.includes(word.id) ? <HiHeart className="text-red-500" /> : <HiOutlineHeart />}
                  </button>
                  <button onClick={() => speak(word.corporateWord)} className="text-xl text-white/20 hover:text-accent-cyan transition-colors">
                    <HiVolumeUp />
                  </button>
                </div>

                <div className="flex items-start mb-6">
                  <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest px-3 py-1 bg-accent-cyan/10 rounded-full">
                    {word.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-2 group-hover:text-accent-cyan transition-colors">{word.corporateWord}</h3>
                <p className="text-white/30 text-xs font-bold mb-6 tracking-widest uppercase">{word.difficultyLevel} Level</p>

                <div className="space-y-4 flex-1">
                   <div>
                      <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Official Meaning</p>
                      <p className="text-white/80 text-sm">{word.meaning}</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">In Plain English</p>
                      <p className="text-accent-cyan text-sm font-medium italic">"{word.simpleHumanTranslation}"</p>
                   </div>
                </div>

                <div className="p-4 bg-accent-purple/10 border border-accent-purple/20 rounded-xl mt-8">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[10px] font-bold text-accent-purple uppercase tracking-[0.2em]">Cold Truth</p>
                    <div className="flex space-x-2">
                      <button onClick={() => copyToClipboard(word.funnyExplanation)} className="text-accent-purple/40 hover:text-accent-purple"><HiClipboard /></button>
                      <button className="text-accent-purple/40 hover:text-accent-purple"><HiShare /></button>
                    </div>
                  </div>
                  <p className="text-white text-sm font-semibold leading-snug">
                    {word.funnyExplanation}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredWords.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/20 text-xl italic">No buzzwords found. Maybe try searching for 'Synergy'?</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Dictionary;
