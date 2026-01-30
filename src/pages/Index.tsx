import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AkashicRecordsSection from "@/components/AkashicRecordsSection";
import JourneyStepsSection from "@/components/JourneyStepsSection";
import KeyInsightsSection from "@/components/KeyInsightsSection";
import StrugglesSection from "@/components/StrugglesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkshopBreakdownSection from "@/components/WorkshopBreakdownSection";
import WhoShouldJoinSection from "@/components/WhoShouldJoinSection";
import { MentorSection } from '@/components/MentorSection';
import FAQSection from "@/components/FAQSection";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Akashic Miracles Workshop - Become a Leading Healing Expert";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Join Dr. Geetanjali V Saxena's 3-Day Live Akashic Records Workshop. Transform your healing career with ancient wisdom. Only ₹99. 15+ years experience, 6000+ satisfied clients.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Join Dr. Geetanjali V Saxena's 3-Day Live Akashic Records Workshop. Transform your healing career with ancient wisdom. Only ₹99. 15+ years experience, 6000+ satisfied clients.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AkashicRecordsSection />
      <JourneyStepsSection />
      <KeyInsightsSection />
      <StrugglesSection />
      <TestimonialsSection />
      <WorkshopBreakdownSection />
      <WhoShouldJoinSection />
      <MentorSection />
      <FAQSection />
      <StickyCTA />
    </main>
  );
};

export default Index;
