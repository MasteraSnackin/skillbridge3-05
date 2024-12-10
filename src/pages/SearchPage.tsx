import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

interface Job {
  id: number;
  title: string;
  category: string;
  budget: number;
  description: string;
  skills: string[];
  postedDate: string;
}

const initialJobs: Job[] = [
  {
    id: 1,
    title: "Smart Contract Developer",
    category: "Blockchain",
    budget: 5000,
    description: "Looking for an experienced Solidity developer to create and audit smart contracts.",
    skills: ["Solidity", "Ethereum", "Smart Contracts"],
    postedDate: "2 days ago"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    category: "Design",
    budget: 3000,
    description: "Need a talented designer for our DeFi platform redesign.",
    skills: ["Figma", "UI Design", "Web3"],
    postedDate: "1 day ago"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    category: "Development",
    budget: 8000,
    description: "Building a new NFT marketplace, seeking experienced developer.",
    skills: ["React", "Node.js", "Web3.js"],
    postedDate: "3 days ago"
  },
];

const SearchPage = () => {
  const [budget, setBudget] = useState([0, 10000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(initialJobs);
  const [skillsFilter, setSkillsFilter] = useState("");

  useEffect(() => {
    console.log("Filtering jobs with:", { searchTerm, selectedCategory, budget, skillsFilter });
    
    const filtered = initialJobs.filter((job) => {
      // Search term filter
      const searchMatch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const categoryMatch = 
        !selectedCategory || job.category === selectedCategory;

      // Budget range filter
      const budgetMatch = 
        job.budget >= budget[0] && job.budget <= budget[1];

      // Skills filter
      const skillsMatch = !skillsFilter || 
        job.skills.some(skill => 
          skill.toLowerCase().includes(skillsFilter.toLowerCase())
        );

      return searchMatch && categoryMatch && budgetMatch && skillsMatch;
    });

    console.log("Filtered jobs:", filtered);
    setFilteredJobs(filtered);
  }, [searchTerm, selectedCategory, budget, skillsFilter]);

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div>
              <h3 className="font-semibold mb-4">Filters</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      <SelectItem value="Blockchain">Blockchain</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                      <SelectItem value="Development">Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Budget Range (USDT)</label>
                  <Slider
                    defaultValue={[0, 10000]}
                    max={10000}
                    step={100}
                    value={budget}
                    onValueChange={setBudget}
                    className="mt-2"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>{budget[0]} USDT</span>
                    <span>{budget[1]} USDT</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Skills</label>
                  <Input 
                    placeholder="e.g. Solidity, React" 
                    value={skillsFilter}
                    onChange={(e) => setSkillsFilter(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
              <Input 
                placeholder="Search jobs..." 
                className="flex-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button>Search</Button>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
                      <span className="text-lg font-semibold text-primary">{job.budget} USDT</span>
                      <p className="text-sm text-gray-500">{job.category}</p>
                      <p className="text-sm text-gray-400 mt-1">{job.postedDate}</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4">Apply Now</Button>
                </div>
              ))}
              
              {filteredJobs.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No jobs found matching your criteria
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;