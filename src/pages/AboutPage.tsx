import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, Cpu, Handshake, Target, History } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Mission and Vision */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Mission & Vision</h2>
          </div>
          <Separator />
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To revolutionize the freelancing industry by leveraging blockchain technology,
                creating a transparent, secure, and efficient platform that empowers both freelancers
                and clients to achieve their goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the world's leading decentralized freelancing platform,
                fostering a global community of talented professionals and innovative businesses
                built on trust, fairness, and mutual success.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>
          <Separator />
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Dave Cheng</h3>
              <p className="text-lg text-primary">AI & Blockchain Innovator | Hackathon Champion</p>
              <p className="text-muted-foreground">Experienced in Logistics Tech & Emerging Solutions</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Fraye Wu</h3>
              <p className="text-lg text-primary">Innovator in Web3 and AI Technology</p>
              <p className="text-muted-foreground">Experienced Financial Markets Analyst | Strategic Leader in IPO Audits</p>
            </div>
          </div>
        </section>

        {/* Journey So Far */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <History className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Journey So Far</h2>
          </div>
          <Separator />
          <div className="space-y-4">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p className="text-muted-foreground">2nd Prize - Encode London Hackathon Winners - WeatherShield DeFi (Best DApp utilizing Flare's enshrined Data Protocols)</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p className="text-muted-foreground">1st Prize - AI Forge Dominos Hackathon</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p className="text-muted-foreground">1st Prize Business Analysis of Solana-Based SaaS Solutions</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p className="text-muted-foreground">Began Community interaction in Oct 24</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p className="text-muted-foreground">Participate in Easy A Hackathon</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p className="text-muted-foreground">Don't win the hackathon 😞</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p className="text-muted-foreground">Judges recognized potential</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p className="text-muted-foreground">Received free ticket to Meridian 24</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p className="text-muted-foreground">Gained access to new knowledge & inspiration</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <p className="text-muted-foreground">Encouraged to apply for Kickstart program</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Cpu className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Technology Stack</h2>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• React with TypeScript</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Web3.js for blockchain integration</li>
                <li>• Progressive Web App capabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Blockchain</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ethereum Smart Contracts</li>
                <li>• Solidity for contract development</li>
                <li>• IPFS for decentralized storage</li>
                <li>• MetaMask integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <Handshake className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Partnerships</h2>
          </div>
          <Separator />
          <div className="space-y-6">
            {[
              {
                name: "TechCorp Solutions",
                type: "Technology Partner",
                description: "Providing advanced blockchain infrastructure"
              },
              {
                name: "SecureChain",
                type: "Security Partner",
                description: "Ensuring platform and transaction security"
              },
              {
                name: "Global Freelancers Association",
                type: "Community Partner",
                description: "Supporting freelancer education and growth"
              }
            ].map((partner, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold">{partner.name}</h3>
                <p className="text-primary font-medium">{partner.type}</p>
                <p className="text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;