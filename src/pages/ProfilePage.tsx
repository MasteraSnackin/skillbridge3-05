import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Github, Linkedin, Award, Star, Briefcase, Shield, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProfilePage = () => {
  const mockPortfolio = [
    { id: 1, title: "DeFi Protocol", description: "Built a decentralized exchange", link: "#" },
    { id: 2, title: "NFT Marketplace", description: "Developed smart contracts for NFT trading", link: "#" },
    { id: 3, title: "DAO Platform", description: "Created governance system", link: "#" },
  ];

  const mockSkills = [
    { name: "Solidity", verified: true, level: "Expert" },
    { name: "Smart Contracts", verified: true, level: "Expert" },
    { name: "Web3.js", verified: true, level: "Advanced" },
    { name: "React", verified: true, level: "Expert" },
    { name: "DeFi", verified: false, level: "Intermediate" },
  ];

  const mockWorkHistory = [
    {
      id: 1,
      project: "DeFi Protocol Development",
      client: "DeFi Labs",
      rating: 5,
      review: "Excellent work on our DeFi protocol. Delivered on time and with great attention to detail.",
      date: "2023",
    },
    {
      id: 2,
      project: "Smart Contract Audit",
      client: "Crypto Security Inc",
      rating: 5,
      review: "Very thorough audit with detailed documentation.",
      date: "2023",
    },
  ];

  const mockAchievements = [
    { id: 1, title: "Top Rated", icon: <Star className="w-4 h-4" />, description: "Maintained 5-star rating for 6 months" },
    { id: 2, title: "Security Expert", icon: <Shield className="w-4 h-4" />, description: "Completed advanced security certification" },
    { id: 3, title: "Code Master", icon: <Code className="w-4 h-4" />, description: "100+ successful projects delivered" },
  ];

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

            {/* Skills Section with Verification */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Verified Skills
              </h3>
              <div className="space-y-3">
                {mockSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      {skill.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{skill.level}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Portfolio Showcase */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Portfolio Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockPortfolio.map((project) => (
                  <Card key={project.id} className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-medium mb-2">{project.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                    <a href={project.link} className="text-primary text-sm hover:underline">
                      View Project →
                    </a>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Work History and Ratings */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Work History
              </h3>
              <div className="space-y-4">
                {mockWorkHistory.map((work) => (
                  <div key={work.id} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{work.project}</h4>
                        <p className="text-sm text-gray-600">{work.client} • {work.date}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(work.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{work.review}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Achievement Badges */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mockAchievements.map((achievement) => (
                  <Card key={achievement.id} className="p-4 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      {achievement.icon}
                    </div>
                    <h4 className="font-medium mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </Card>
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