import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WordShowcase from '../components/WordShowcase';
import AboutSession from '../components/AboutSession';
import WhyLearn from '../components/WhyLearn';
import Features from '../components/Features';
import QuizPreview from '../components/QuizPreview';
import FlashcardPreview from '../components/FlashcardPreview';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import DeveloperSection from '../components/DeveloperSection';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="space-y-32 pb-32">
        <WordShowcase />
        <AboutSession />
        <WhyLearn />
        <Features />
        <QuizPreview />
        <FlashcardPreview />
        <Statistics />
        <Testimonials />
        <DeveloperSection />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </>
  );
};

export default Home;
