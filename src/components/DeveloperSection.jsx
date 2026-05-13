import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiChip, HiLightningBolt } from 'react-icons/hi';
import developerImg from '../developer.jpg.jpeg';

const DeveloperSection = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="glass rounded-[3rem] p-12 md:p-20 border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
        {/* Decorative Background Elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-purple/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-cyan/20 blur-[100px] rounded-full" />

        {/* Left: Identity Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group shrink-0"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-3xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 bg-dark rounded-3xl flex items-center justify-center overflow-hidden border border-white/10">
             <img 
               src={developerImg} 
               alt="Mohammed Zakki Adnaan P" 
               className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-cyan">Creator</span>
             </div>
          </div>
        </motion.div>

        {/* Right: Bio Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left flex-1"
        >
          <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
             <span className="bg-accent-purple/20 text-accent-purple text-[10px] font-bold px-3 py-1 rounded-full border border-accent-purple/30 uppercase tracking-widest">Architect</span>
             <span className="w-1 h-1 bg-white/20 rounded-full"></span>
             <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Full-Stack Developer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
            Mohammed Zakki <span className="text-gradient">Adnaan P</span>
          </h2>
          
          <p className="text-white/40 text-lg mb-10 leading-relaxed max-w-xl">
            A creative technologist dedicated to building immersive digital experiences. 
            Creator of the Corporate Decoder platform, bridging the gap between corporate jargon 
            and human understanding through modern UI/UX.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              href="https://codebyzakki.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center px-8 py-4 group"
            >
              View Portfolio <HiExternalLink className="ml-2 group-hover:rotate-45 transition-transform" />
            </a>
            
            <div className="flex items-center space-x-4 px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
               <HiChip className="text-accent-cyan" />
               <span className="text-xs font-bold uppercase tracking-widest text-white/60">Modern Stack</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperSection;
