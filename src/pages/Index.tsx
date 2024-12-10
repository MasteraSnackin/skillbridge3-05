import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Communication } from "@/components/Communication";
import { UserManagement } from "@/components/UserManagement";
import { ContentManagement } from "@/components/ContentManagement";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Communication />
      <UserManagement />
      <ContentManagement />
      <Testimonials />
    </div>
  );
};

export default Index;