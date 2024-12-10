import { ArrowRight, FileCheck, Search, Wallet } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Projects",
    description: "Browse through hundreds of blockchain and crypto projects that match your skills"
  },
  {
    icon: FileCheck,
    title: "Submit Proposals",
    description: "Apply to projects with your best proposal and showcase your expertise"
  },
  {
    icon: Wallet,
    title: "Get Paid in Crypto",
    description: "Receive payments in various cryptocurrencies through smart contracts"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};