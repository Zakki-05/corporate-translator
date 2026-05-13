import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiChatAlt2, HiPresentationChartLine, HiGlobeAlt, HiShieldCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const WhyLearn = () => {
  const reasons = [
    {
      title: "Interview Fluency",
      desc: "Impress recruiters by speaking their language without sounding like a robot.",
      icon: <HiBriefcase />,
      color: "text-blue-400"
    },
    {
      title: "Client Discussions",
      desc: "Understand exactly what the client wants when they say 'holistic approach'.",
      icon: <HiChatAlt2 />,
      color: "text-purple-400"
    },
    {
      title: "Workplace Confidence",
      desc: "Never feel left out in cafeteria conversations again.",
      icon: <HiShieldCheck />,
      color: "text-emerald-400"
    },
    {
      title: "Networking Skills",
      desc: "Write LinkedIn comments that actually get replies from CEOs.",
      icon: <HiGlobeAlt />,
      color: "text-cyan-400"
    },
    {
      title: "Meeting Presence",
      desc: "Contribute meaningful 'synergy' to every presentation.",
      icon: <HiPresentationChartLine />,
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Master the <span className="text-accent-purple">Game</span></h2>
          <p className="text-white/50">Because knowing the code is only half the battle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-neon group"
            >
              <div className={`text-4xl mb-6 ${reason.color} group-hover:scale-110 transition-transform`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-white/40 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-blue flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Ready to start?</h3>
              <p className="text-white/80">Join the next cohort and stop being a 'normal' person.</p>
            </div>
            <Link 
              to="/quiz"
              className="mt-8 bg-white text-dark font-bold py-3 rounded-xl hover:bg-opacity-90 transition-all text-center"
            >
              Claim Your Spot
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearn;
