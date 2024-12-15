import { Navigation } from "@/components/Navigation";
import { Support } from "@/components/Support";
import { Footer } from "@/components/Footer";

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-4xl font-bold mb-8">Support Center</h1>
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default SupportPage;