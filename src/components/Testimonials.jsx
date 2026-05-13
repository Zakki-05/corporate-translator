import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

const testimonials = [
  {
    name: "Aman Gupta",
    role: "Engineering Student",
    text: "Now I finally understand what people mean in office meetings. Before this, I thought 'bandwidth' was just for my Wi-Fi.",
    rating: 5,
    avatar: "AG"
  },
  {
    name: "Sneha Kapoor",
    role: "Fresh Graduate",
    text: "The funny translations are spot on! I used 'Circle Back' in an interview and the HR actually nodded. 10/10 session.",
    rating: 5,
    avatar: "SK"
  },
  {
    name: "Rohan Das",
    role: "MBA Aspirant",
    text: "This is the most honest corporate training I've ever seen. Fun, interactive, and actually useful for someone starting out.",
    rating: 5,
    avatar: "RD"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-mesh relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Student <span className="text-accent-cyan">Voices</span></h2>
          <p className="text-white/50">Don't take our word for it. Here's what the future of corporate India thinks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass border-white/10 relative group hover:border-accent-purple/50 transition-colors"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-500 text-xl" />
                ))}
              </div>
              
              <p className="text-lg text-white/80 mb-8 italic leading-relaxed">
                "{item.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center font-bold text-white shadow-lg">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-8 right-8 text-6xl text-white/5 font-serif opacity-20 pointer-events-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
