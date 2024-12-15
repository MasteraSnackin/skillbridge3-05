import { Shield, Globe, Zap, Coins, Wallet, FileCheck, Clock, Receipt } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Wallet,
    title: "Multi-Crypto Payments",
    description: "Support for major cryptocurrencies including ETH, BTC, and stablecoins",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: Shield,
    title: "Secure Escrow",
    description: "Automated escrow system protects both freelancers and clients",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: Clock,
    title: "Payment Milestones",
    description: "Track and release payments based on project milestones",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: Receipt,
    title: "Auto Invoicing",
    description: "Generate and manage professional crypto invoices automatically",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: FileCheck,
    title: "Transaction History",
    description: "Detailed history of all payments and transfers",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: Globe,
    title: "Global Payments",
    description: "Borderless transactions with minimal fees",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security for all transactions",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Quick and efficient payment processing",
    gradient: "from-primary/20 to-primary/10",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Features = () => {
  return (
    <section className="py-section bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Payment Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the future of payments with our secure, efficient, and flexible solutions for freelancers and clients worldwide
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative"
            >
              <div className="relative z-10 h-full p-8 bg-card rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="mb-6 inline-block transform transition-transform duration-300 group-hover:scale-110">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
                      <feature.icon className="w-full h-full text-primary transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};