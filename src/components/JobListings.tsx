import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const jobs = [
  {
    title: "Smart Contract Developer",
    category: "Blockchain",
    budget: "5000 USDT",
    description: "Looking for an experienced Solidity developer to create and audit smart contracts.",
    skills: ["Solidity", "Ethereum", "Smart Contracts"],
  },
  {
    title: "UI/UX Designer",
    category: "Design",
    budget: "3000 USDT",
    description: "Need a talented designer for our DeFi platform redesign.",
    skills: ["Figma", "UI Design", "Web3"],
  },
  {
    title: "Full Stack Developer",
    category: "Development",
    budget: "8000 USDT",
    description: "Building a new NFT marketplace, seeking experienced developer.",
    skills: ["React", "Node.js", "Web3.js"],
  },
];

export const JobListings = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Jobs</h2>
        <div className="grid gap-6">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-semibold text-primary">{job.budget}</span>
                  <p className="text-sm text-gray-500">{job.category}</p>
                </div>
              </div>
              <Button className="w-full mt-4">Apply Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};