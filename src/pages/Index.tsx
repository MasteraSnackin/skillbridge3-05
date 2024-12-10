import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { JobListings } from "@/components/JobListings";
import { Stats } from "@/components/Stats";
import { Navigation } from "@/components/Navigation";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Communication } from "@/components/Communication";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <section className="py-16 px-4">
          <Communication />
        </section>
        <JobListings />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;