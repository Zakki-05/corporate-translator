import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiUserGroup, HiCube } from 'react-icons/hi';

const AboutSession = () => {
  const benefits = [
    {
      title: "Crack Interviews",
      desc: "Stop looking like a deer in headlights when HR asks about your 'bandwidth'.",
      icon: <HiUserGroup className="text-3xl" />
    },
    {
      title: "Meeting Survival",
      desc: "Nod intelligently while people talk about 'synergistic alignment'.",
      icon: <HiCube className="text-3xl" />
    },
    {
      title: "LinkedIn Mastery",
      desc: "Write posts that sound impressive but say absolutely nothing.",
      icon: <HiCheckCircle className="text-3xl" />
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why This <span className="text-gradient">Weekend Session?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Let's be real: college doesn't teach you how to speak "Corporate." You enter your first job and suddenly people are talking about "pivoting deliverables" and "deep diving into KPIs." 
            </p>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              We've created a fun, no-BS workshop to help freshers and students decode the jargon, laugh at the absurdity, and actually communicate effectively in a professional environment.
            </p>
            
            <div className="space-y-6">
              {benefits.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4 p-6 glass rounded-2xl border-white/5 hover:border-accent-purple/30 transition-colors"
                >
                  <div className="p-3 bg-accent-purple/10 rounded-xl text-accent-purple">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Students collaborating" 
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-dark bg-accent-purple flex items-center justify-center text-[10px] font-bold">
                        U{i}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium">Joined by <span className="text-accent-cyan">500+ students</span> this month</p>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-purple/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-cyan/20 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSession;
