import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { JobListings } from "@/components/JobListings";
import { Stats } from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <JobListings />
      <Stats />
    </div>
  );
};

export default Index;