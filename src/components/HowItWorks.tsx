import { ArrowRight, Search, FileCheck, Wallet, Section } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Find Projects",
    description: "Browse through hundreds of blockchain and crypto projects that match your skills",
    gradient: "from-primary/20 to-primary/10"
  },
  {
    icon: FileCheck,
    title: "Submit Proposals",
    description: "Apply to projects with your best proposal and showcase your expertise",
    gradient: "from-primary/20 to-primary/10"
  },
  {
    icon: Wallet,
    title: "Get Paid in Crypto",
    description: "Receive payments in various cryptocurrencies through smart contracts",
    gradient: "from-primary/20 to-primary/10"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const HowItWorks = () => {
  return (
    <section className="py-section bg-gradient-to-b from-white to-muted overflow-hidden border-t border-b border-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Section className="w-6 h-6 text-primary" />
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              How It Works
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Get started with SkillBridge in three simple steps
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={item} className="relative">
              <div className="group h-full">
                <div className="relative z-10 h-full p-8 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="mb-6 inline-block">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20 transform group-hover:scale-110">
                        <step.icon className="w-full h-full text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};