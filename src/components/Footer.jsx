import React from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark/50 pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-purple to-accent-blue rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">
                C
              </div>
              <span className="text-xl font-bold tracking-tight">
                Corp<span className="text-accent-cyan">Decoder</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Making corporate communication fun and accessible for the next generation of professionals. Decode the jargon, own the meeting.
            </p>
            <div className="flex space-x-4">
              {[FaLinkedin, FaTwitter, FaInstagram, FaGithub].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-purple transition-colors">
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/40">
              {['Home', 'Quiz', 'Dictionary', 'Flashcards', 'Leaderboard', 'About Session'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-white/40">
              {['Help Center', 'Corporate Glossary', 'Meme Library', 'Freshers Guide', 'Interview Tips'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-center space-x-3">
                <HiMail className="text-accent-purple" />
                <span>hello@corpdecoder.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <HiPhone className="text-accent-purple" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <HiLocationMarker className="text-accent-purple" />
                <span>Cyber City, Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20 font-medium uppercase tracking-widest">
            © 2026 CorpDecoder. All rights reserved. Built with ❤️ for the Gen-Z Workforce.
          </p>
          <div className="flex space-x-6 text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
