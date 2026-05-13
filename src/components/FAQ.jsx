import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

const faqData = [
  {
    question: "What is corporate language?",
    answer: "It's a specialized set of buzzwords used in offices to make simple things sound complicated. It helps in sounding professional while often avoiding direct answers."
  },
  {
    question: "Is this session beginner friendly?",
    answer: "Absolutely! In fact, it's designed specifically for beginners and freshers who are about to enter the workforce or have just started."
  },
  {
    question: "Do I need IT experience?",
    answer: "No IT experience required. Corporate jargon is universal across Finance, Marketing, HR, and Tech companies."
  },
  {
    question: "Will this help in interviews?",
    answer: "Yes, by understanding these terms, you can better articulate your skills and understand what interviewers are really asking."
  },
  {
    question: "Is the quiz free?",
    answer: "The preview quiz is free! The full access comes with the weekend training session enrollment."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all duration-300
          ${isOpen ? 'bg-white/5 border-accent-purple/30' : 'bg-transparent border-white/5 hover:border-white/20'}`}
      >
        <span className="text-lg font-bold text-left">{question}</span>
        {isOpen ? <HiMinus className="text-accent-purple" /> : <HiPlus className="text-white/40" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 text-white/50 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Curiosity <span className="text-accent-purple">Hub</span></h2>
          <p className="text-white/50">Everything you need to know before you circle back.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <FAQItem
              key={i}
              {...faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
