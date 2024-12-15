import { Navigation } from "@/components/Navigation";
import { SecurityManagement } from "@/components/SecurityManagement";
import { Footer } from "@/components/Footer";

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-4xl font-bold mb-8">Security</h1>
        <SecurityManagement />
      </main>
      <Footer />
    </div>
  );
};

export default SecurityPage;