import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ count, suffix, label, color }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="text-center p-8 glass rounded-3xl border-white/5 flex flex-col items-center">
      <div className={`text-4xl md:text-6xl font-extrabold mb-4 ${color}`}>
        {inView ? (
          <CountUp end={count} duration={2.5} suffix={suffix} />
        ) : (
          "0" + suffix
        )}
      </div>
      <p className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold">{label}</p>
    </div>
  );
};

const Statistics = () => {
  const stats = [
    { count: 50, suffix: "+", label: "Corporate Words", color: "text-accent-cyan" },
    { count: 100, suffix: "+", label: "Students Trained", color: "text-accent-purple" },
    { count: 500, suffix: "+", label: "Quiz Attempts", color: "text-accent-blue" },
    { count: 95, suffix: "%", label: "Satisfaction", color: "text-accent-neon" }
  ];

  return (
    <section id="stats" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
