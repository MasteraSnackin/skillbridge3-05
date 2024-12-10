import { Shield, Globe, Zap, Coins } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Smart contracts ensure safe and transparent transactions",
  },
  {
    icon: Globe,
    title: "Global Talent",
    description: "Access skilled professionals from around the world",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Quick matching and seamless collaboration",
  },
  {
    icon: Coins,
    title: "Crypto Payments",
    description: "Multiple cryptocurrency payment options",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose CryptoLance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};