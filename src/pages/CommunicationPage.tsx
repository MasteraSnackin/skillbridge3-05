import { Navigation } from "@/components/Navigation";
import { Communication } from "@/components/Communication";
import { Footer } from "@/components/Footer";

const CommunicationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-4xl font-bold mb-8">Communication Tools</h1>
        <Communication />
      </main>
      <Footer />
    </div>
  );
};

export default CommunicationPage;