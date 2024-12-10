import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Github, Linkedin, Award, Star } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 text-center">
              <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <User className="w-16 h-16 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">John Doe</h2>
              <p className="text-gray-600 mb-4">Blockchain Developer</p>
              <div className="flex justify-center space-x-4 mb-6">
                <button className="text-gray-600 hover:text-primary">
                  <Github className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="text-gray-600 hover:text-primary">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between text-center border-t pt-4">
                <div>
                  <div className="font-bold">98%</div>
                  <div className="text-sm text-gray-600">Job Success</div>
                </div>
                <div>
                  <div className="font-bold">4.9/5</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div>
                  <div className="font-bold">50+</div>
                  <div className="text-sm text-gray-600">Jobs</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Solidity</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Smart Contracts</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">DeFi</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Web3.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">About Me</h3>
              <Textarea
                className="mb-4"
                placeholder="Tell us about yourself..."
                defaultValue="Experienced blockchain developer with a focus on DeFi protocols and smart contract development. Over 5 years of experience in the crypto space."
              />
              <Button>Save Changes</Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Recent Reviews
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">DeFi Protocol Development</div>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      "Excellent work on our DeFi protocol. Delivered on time and with great attention to detail."
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;