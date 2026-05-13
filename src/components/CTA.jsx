import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCalendar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center bg-navy border border-white/10">
          {/* Animated background blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[100px]"
          />

          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight"
            >
              Stop Pretending to Understand <br />
              <span className="text-gradient">Office Jargon.</span>
            </motion.h2>
            
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Join our weekend training session and decode the corporate world in just 2 days. Limited seats available for the next cohort!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/quiz" className="btn-primary group flex items-center w-full sm:w-auto justify-center">
                Join Weekend Session
                <HiCalendar className="ml-2" />
              </Link>
              <Link to="/dictionary" className="btn-secondary group flex items-center w-full sm:w-auto justify-center">
                Start Learning Now
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="mt-8 text-sm text-white/30 italic">
              *Warning: May result in sudden promotions and confusing your parents with LinkedIn-speak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
