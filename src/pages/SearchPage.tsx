import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const SearchPage = () => {
  const [budget, setBudget] = useState([0, 10000]);
  
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
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blockchain">Blockchain</SelectItem>
                      <SelectItem value="web3">Web3</SelectItem>
                      <SelectItem value="defi">DeFi</SelectItem>
                      <SelectItem value="nft">NFT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Budget Range (USDT)</label>
                  <Slider
                    defaultValue={[0, 10000]}
                    max={10000}
                    step={100}
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
                  <Input placeholder="e.g. Solidity, React" />
                </div>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
              <Input placeholder="Search jobs..." className="flex-1" />
              <Button>Search</Button>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((job) => (
                <div key={job} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Smart Contract Developer</h3>
                      <p className="text-gray-600 mb-4">Looking for an experienced Solidity developer to create and audit smart contracts.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Solidity</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Ethereum</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Smart Contracts</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold text-primary">5000 USDT</span>
                      <p className="text-sm text-gray-500">Posted 2 days ago</p>
                    </div>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;