import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";
import FeaturedCampaigns from "../components/home/FeaturedCampaigns";
import TransparencySection from "../components/home/TransparencySection";
import ImpactVerificationSection from "../components/home/ImpactVerificationSection";
import CTASection from "../components/home/CTASection";

function Home() {
  return (
    <div>
      <HeroSection />

      <HowItWorks />

      <FeaturedCampaigns />

      <TransparencySection />

      <ImpactVerificationSection />

      <CTASection />
    </div>
  );
}

export default Home;