import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const jobs = [
  {
    title: "Smart Contract Developer",
    category: "Blockchain",
    budget: "5000 USDT",
    description: "Looking for an experienced Solidity developer to create and audit smart contracts.",
    skills: ["Solidity", "Ethereum", "Smart Contracts"],
    experience: "3-5 years",
    type: "Full-time",
    location: "Remote",
    postedDate: "2 days ago",
  },
  {
    title: "UI/UX Designer",
    category: "Design",
    budget: "3000 USDT",
    description: "Need a talented designer for our DeFi platform redesign.",
    skills: ["Figma", "UI Design", "Web3"],
    experience: "2-4 years",
    type: "Contract",
    location: "Hybrid",
    postedDate: "1 day ago",
  },
  {
    title: "Full Stack Developer",
    category: "Development",
    budget: "8000 USDT",
    description: "Building a new NFT marketplace, seeking experienced developer.",
    skills: ["React", "Node.js", "Web3.js"],
    experience: "4-6 years",
    type: "Full-time",
    location: "Remote",
    postedDate: "3 days ago",
  },
  {
    title: "Blockchain Security Engineer",
    category: "Security",
    budget: "7000 USDT",
    description: "Security expert needed for smart contract auditing and platform security.",
    skills: ["Security Auditing", "Blockchain", "Cryptography"],
    experience: "5+ years",
    type: "Full-time",
    location: "On-site",
    postedDate: "4 days ago",
  },
  {
    title: "Product Manager",
    category: "Management",
    budget: "6000 USDT",
    description: "Experienced PM needed for Web3 project management.",
    skills: ["Agile", "Web3", "Product Strategy"],
    experience: "3-5 years",
    type: "Full-time",
    location: "Hybrid",
    postedDate: "2 days ago",
  }
];

export const JobListings = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filters, setFilters] = useState({
    category: "all",
    type: "all",
    location: "all",
    experience: "all",
    search: "",
    remoteOnly: false,
  });

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const categoryMatch = filters.category === "all" || job.category === filters.category;
      const typeMatch = filters.type === "all" || job.type === filters.type;
      const locationMatch = filters.location === "all" || job.location === filters.location;
      const experienceMatch = filters.experience === "all" || job.experience === filters.experience;
      const searchMatch = job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         job.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(filters.search.toLowerCase()));
      const remoteMatch = !filters.remoteOnly || job.location === "Remote";

      return categoryMatch && typeMatch && locationMatch && experienceMatch && searchMatch && remoteMatch;
    });

    setFilteredJobs(filtered);
  }, [filters]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Jobs</h2>
        
        {/* Filters Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={filters.category} onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Blockchain">Blockchain</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Development">Development</SelectItem>
                  <SelectItem value="Security">Security</SelectItem>
                  <SelectItem value="Management">Management</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Job Type</Label>
              <Select value={filters.type} onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Location</Label>
              <Select value={filters.location} onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                  <SelectItem value="On-site">On-site</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Experience</Label>
              <Select value={filters.experience} onValueChange={(value) => setFilters(prev => ({ ...prev, experience: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Experience</SelectItem>
                  <SelectItem value="2-4 years">2-4 years</SelectItem>
                  <SelectItem value="3-5 years">3-5 years</SelectItem>
                  <SelectItem value="4-6 years">4-6 years</SelectItem>
                  <SelectItem value="5+ years">5+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Input 
              placeholder="Search jobs, skills, or keywords..." 
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="flex-1"
            />
            <div className="flex items-center gap-2">
              <Checkbox 
                id="remote"
                checked={filters.remoteOnly}
                onCheckedChange={(checked) => setFilters(prev => ({ ...prev, remoteOnly: checked as boolean }))}
              />
              <Label htmlFor="remote">Remote only</Label>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.title}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span>Experience: {job.experience}</span>
                    <span>Type: {job.type}</span>
                    <span>Location: {job.location}</span>
                    <span>Posted: {job.postedDate}</span>
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

          {filteredJobs.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No jobs found matching your criteria
            </div>
          )}
        </div>
      </div>
    </section>
  );
};