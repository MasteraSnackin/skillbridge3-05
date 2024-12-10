import { Shield, Globe, Zap, Coins, Wallet, FileCheck, Clock, Receipt } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Multi-Crypto Payments",
    description: "Support for major cryptocurrencies including ETH, BTC, and stablecoins",
  },
  {
    icon: Shield,
    title: "Secure Escrow",
    description: "Automated escrow system protects both freelancers and clients",
  },
  {
    icon: Clock,
    title: "Payment Milestones",
    description: "Track and release payments based on project milestones",
  },
  {
    icon: Receipt,
    title: "Auto Invoicing",
    description: "Generate and manage professional crypto invoices automatically",
  },
  {
    icon: FileCheck,
    title: "Transaction History",
    description: "Detailed history of all payments and transfers",
  },
  {
    icon: Globe,
    title: "Global Payments",
    description: "Borderless transactions with minimal fees",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security for all transactions",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Quick and efficient payment processing",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Payment Features</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Secure, efficient, and flexible payment solutions for freelancers and clients worldwide
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};