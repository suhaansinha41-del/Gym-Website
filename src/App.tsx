import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { WhyUs } from './components/WhyUs';
import { GoalSelector } from './components/GoalSelector';
import { FacilityBento } from './components/FacilityBento';
import { Programs } from './components/Programs';
import { BodyExplorer } from './components/BodyExplorer';
import { FitnessCalculator } from './components/FitnessCalculator';
import { RealResults } from './components/RealResults';
import { Trainers } from './components/Trainers';
import { Testimonials } from './components/Testimonials';
import { Membership } from './components/Membership';
import { PersonalTraining } from './components/PersonalTraining';
import { LocationSection } from './components/LocationSection';
import { LeadForm } from './components/LeadForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedGoalForBooking, setSelectedGoalForBooking] = useState<string>('Fat Loss');

  const handleOpenBooking = (goalName?: string) => {
    if (goalName) {
      setSelectedGoalForBooking(goalName);
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#111315] text-[#F5F5F5] relative selection:bg-[#D71920] selection:text-white bg-grain">
      {/* Custom Minimal Cursor for Desktop */}
      <CustomCursor />

      {/* 2px Scroll progress indicator */}
      <ScrollProgress />

      {/* Sticky transparent / blurred navbar */}
      <Navbar onOpenBookingModal={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero with 3D Fitness Object & Multi-tier Fallback */}
        <Hero onOpenBookingModal={handleOpenBooking} />

        {/* 2. Trust Marquee */}
        <TrustMarquee />

        {/* 3. Why Choose Us */}
        <WhyUs />

        {/* 4. Interactive Fitness Goal Section (WOW Moment 2) */}
        <GoalSelector
          onSelectGoal={(goal) => {
            handleOpenBooking(goal);
          }}
        />

        {/* 5. Facility Bento Grid (WOW Moment 3) */}
        <FacilityBento />

        {/* 6. Programs Section with Beginner Welcome Callout */}
        <Programs
          onSelectProgram={(program) => {
            handleOpenBooking(program);
          }}
        />

        {/* 7. Interactive Body / Fitness Muscle Explorer (WOW Moment 6) */}
        <BodyExplorer />

        {/* 8. Fitness Assessment / BMI Tool (WOW Moment 5) */}
        <FitnessCalculator
          onAssessmentClick={(calcData) => {
            handleOpenBooking(`${calcData.goal} (BMI: ${calcData.bmi})`);
          }}
        />

        {/* 9. Real Results with Functional Before/After Slider (WOW Moment 4) */}
        <RealResults />

        {/* 10. Trainers Section */}
        <Trainers />

        {/* 11. Testimonials / Google Reviews */}
        <Testimonials />

        {/* 12. Membership Plans */}
        <Membership
          onSelectPlan={(plan) => {
            handleOpenBooking(`${plan} Membership`);
          }}
        />

        {/* 13. Premium Personal Training Showcase */}
        <PersonalTraining
          onBookPT={() => {
            handleOpenBooking('Personal Training');
          }}
        />

        {/* 14. Location & Local Trust Section (Ranchi, Jharkhand) */}
        <LocationSection />

        {/* 15. Inline Free Visit Lead Form */}
        <section id="book-visit" className="py-20 lg:py-28 bg-[#111315] relative border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm initialGoal={selectedGoalForBooking} />
          </div>
        </section>

        {/* 16. Final Dramatic CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 17. Quiet Footer */}
      <Footer />

      {/* Desktop Floating WhatsApp Button */}
      <WhatsAppFloating />

      {/* Mobile Sticky Bottom Conversion Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Instant Conversion Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        preselectedGoal={selectedGoalForBooking}
      />
    </div>
  );
}
