import React from 'react';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiAcademicCap, HiFire, HiChartBar, HiEmojiHappy, HiCollection } from 'react-icons/hi';

const Features = () => {
  const features = [
    {
      title: "50+ Corporate Words",
      desc: "Comprehensive database of the most confusing terms used in modern offices.",
      icon: <HiCollection />,
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Interactive Quiz",
      desc: "Test your knowledge and see if you're ready for the corporate grind.",
      icon: <HiLightningBolt />,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Flashcard Mode",
      desc: "Gamified learning with 3D flip cards for quick memorization.",
      icon: <HiFire />,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Performance Tracking",
      desc: "See your progress from 'Confused Intern' to 'Synergy Master'.",
      icon: <HiChartBar />,
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Funny Explanations",
      desc: "Hilarious translations that tell you what managers are actually saying.",
      icon: <HiEmojiHappy />,
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Leaderboard",
      desc: "Compete with other freshers to become the ultimate corporate linguist.",
      icon: <HiAcademicCap />,
      gradient: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Everything You <span className="text-accent-cyan">Need</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-1 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-white/10`}
            >
              <div className="bg-dark/80 backdrop-blur-xl p-8 rounded-2xl h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-3xl mb-6 text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
