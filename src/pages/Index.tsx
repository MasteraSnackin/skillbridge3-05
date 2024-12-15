import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Communication } from "@/components/Communication";
import { UserManagement } from "@/components/UserManagement";
import { ContentManagement } from "@/components/ContentManagement";
import { FinancialManagement } from "@/components/FinancialManagement";
import { SecurityManagement } from "@/components/SecurityManagement";
import { Support } from "@/components/Support";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
      <Communication />
      <UserManagement />
      <ContentManagement />
      <FinancialManagement />
      <SecurityManagement />
      <Support />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;