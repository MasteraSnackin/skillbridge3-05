import { Button } from "@/components/ui/button";
import { Search, BriefcaseIcon } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/90 to-secondary/90">
      <div className="absolute inset-0 bg-grid-white/10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="animate-fade-in flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Main content */}
          <div className="md:w-7/12 md:text-left">
            <span className="inline-block mb-4 px-3 py-1 text-sm bg-white/10 rounded-full">Example Screenshot - Demo Version</span>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              The Future of Freelancing is{" "}
              <span className="text-accent animate-pulse">Decentralized</span>
            </h1>
            <p className="mb-8 text-xl text-gray-200 md:text-2xl">
              Connect with top talent and clients worldwide, powered by blockchain technology. 
              Secure payments, transparent transactions, and endless opportunities.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-accent hover:bg-accent/90 gap-2">
                <Search className="w-4 h-4" />
                Find Talent
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 gap-2">
                <BriefcaseIcon className="w-4 h-4" />
                Post a Job
              </Button>
            </div>
          </div>

          {/* Waitlist section */}
          <div className="mt-12 md:mt-0 md:w-4/12 md:text-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-accent">Join Our Waitlist</h3>
              <p className="text-sm text-gray-200">
                As a special thank you for joining our early community, we are excited to offer you a 14-day free trial when we launch. 
                This will allow you to explore all the features and benefits our platform has to offer without any commitment. 
                Additionally, we will personally reach out to ensure you have a smooth onboarding experience and to gather your valuable feedback.
              </p>
              <a 
                href="https://forms.gle/qu5rKXBXCkBqntc49" 
                className="inline-block text-accent hover:text-accent/90 underline font-medium"
              >
                Join now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};