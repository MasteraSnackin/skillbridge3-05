import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CryptoLance</h3>
            <p className="text-sm">Decentralized freelancing platform powered by blockchain technology.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">For Freelancers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Find Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Create Profile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment Info</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find Talent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} CryptoLance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};