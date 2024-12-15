import { Navigation } from "@/components/Navigation";
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
import ProfilePage from "@/pages/ProfilePage";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, MessageSquare, LifeBuoy, Component } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Quick Navigation Section */}
      <div className="container mx-auto px-4 py-8 mt-16">
        <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/features">
            <Button variant="outline" className="w-full group">
              <Component className="w-4 h-4 mr-2" />
              Features
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/support">
            <Button variant="outline" className="w-full group">
              <LifeBuoy className="w-4 h-4 mr-2" />
              Support
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/security">
            <Button variant="outline" className="w-full group">
              <Shield className="w-4 h-4 mr-2" />
              Security
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/communication">
            <Button variant="outline" className="w-full group">
              <MessageSquare className="w-4 h-4 mr-2" />
              Communication
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <Hero />
      <Features />
      <HowItWorks />
      <ProfilePage />
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