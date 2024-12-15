import { Button } from "@/components/ui/button";
import { Search, BriefcaseIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/90 to-secondary/90 mt-16">
      <div className="absolute inset-0 bg-grid-white/10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between"
        >
          {/* Main content */}
          <div className="md:w-7/12 md:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-3 py-1 text-sm bg-white/10 rounded-full transition-all duration-300 hover:bg-white/20 cursor-pointer"
            >
              Example Screenshot - Demo Version
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-5xl font-bold leading-tight md:text-6xl group"
            >
              The Future of Freelancing is{" "}
              <span className="text-accent inline-block group-hover:animate-wiggle">
                Decentralized
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-xl text-gray-200 md:text-2xl transition-all duration-300 hover:text-white"
            >
              Connect with top talent and clients worldwide, powered by blockchain technology. 
              Secure payments, transparent transactions, and endless opportunities.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <Button 
                size="lg" 
                className="interactive-hover bg-accent hover:bg-accent/90 gap-2 group"
              >
                <Search className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="relative">
                  Find Talent
                  <span className="absolute inset-0 bg-white/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="interactive-hover text-white border-white hover:bg-white/10 gap-2 group"
              >
                <BriefcaseIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="relative">
                  Post a Job
                  <span className="absolute inset-0 bg-white/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center justify-start space-x-4"
            >
              <div className="flex -space-x-4 hover-lift">
                {[
                  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                ].map((src, index) => (
                  <motion.img
                    key={src}
                    src={`${src}?w=100&h=100&fit=crop`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white transition-transform hover:scale-110 duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  />
                ))}
              </div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-sm text-gray-200 hover:text-white transition-colors duration-300"
              >
                Join 1000+ professionals already using SkillBridge
              </motion.span>
            </motion.div>
          </div>

          {/* Waitlist section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 md:mt-0 md:w-4/12"
          >
            <div className="sticky top-4">
              <div className="interactive-hover bg-white/5 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-accent animate-pulse">Join Our Waitlist</h3>
                <p className="text-sm text-gray-200 group-hover:text-white transition-colors duration-300">
                  As a special thank you for joining our early community, we are excited to offer you a 14-day free trial when we launch. 
                  This will allow you to explore all the features and benefits our platform has to offer without any commitment.
                </p>
                <a 
                  href="https://forms.gle/qu5rKXBXCkBqntc49" 
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/90 underline font-medium relative group"
                >
                  <span>Join now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};