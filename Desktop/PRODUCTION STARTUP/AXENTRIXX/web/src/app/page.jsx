import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import HMSHighlight from "../components/HMSHighlight";
import WhyChooseUs from "../components/WhyChooseUs";
import FoundersSection from "../components/FoundersSection";
import CaseStudiesPreview from "../components/CaseStudiesPreview";
import BlogPreview from "../components/BlogPreview";
import ContactCTA from "../components/ContactCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main>
        <HeroSection />
        <ServicesOverview />
        <HMSHighlight />
        <WhyChooseUs />
        <FoundersSection />
        <CaseStudiesPreview />
        <BlogPreview />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
