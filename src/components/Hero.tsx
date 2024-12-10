import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-secondary">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
          The Future of Freelancing is{" "}
          <span className="text-accent">Decentralized</span>
        </h1>
        <p className="mb-8 text-xl text-gray-200 md:text-2xl">
          Connect with top talent and clients worldwide, powered by blockchain technology
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Find Talent
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Post a Job
          </Button>
        </div>
      </div>
    </div>
  );
};