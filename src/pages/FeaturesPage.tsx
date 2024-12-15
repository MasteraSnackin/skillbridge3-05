import { Navigation } from "@/components/Navigation";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-4xl font-bold mb-8">Platform Features</h1>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;