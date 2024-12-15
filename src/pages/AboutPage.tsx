import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, Cpu, Handshake, Target } from "lucide-react";

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
          <Card>
            <CardContent className="pt-6">
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
            </CardContent>
          </Card>
        </section>

        {/* Team Members */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                description: "Blockchain pioneer with 10+ years in tech leadership"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                description: "Smart contract expert & full-stack developer"
              },
              {
                name: "Elena Rodriguez",
                role: "Head of Operations",
                description: "Operations specialist with focus on user experience"
              },
              {
                name: "David Kim",
                role: "Lead Developer",
                description: "Blockchain architecture and security specialist"
              },
              {
                name: "Lisa Thompson",
                role: "Community Manager",
                description: "Building and nurturing our global community"
              },
              {
                name: "James Wilson",
                role: "Product Manager",
                description: "Driving product strategy and innovation"
              }
            ].map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground mt-2">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Cpu className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Technology Stack</h2>
          </div>
          <Separator />
          <Card>
            <CardContent className="pt-6">
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
            </CardContent>
          </Card>
        </section>

        {/* Partnerships */}
        <section className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <Handshake className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Partnerships</h2>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold">{partner.name}</h3>
                  <p className="text-primary font-medium">{partner.type}</p>
                  <p className="text-muted-foreground mt-2">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;