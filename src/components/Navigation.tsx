import { Button } from "@/components/ui/button";
import { Wallet2, Menu, Search, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connectMetaMask } from "@/utils/wallet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleWalletConnect = async (type: string) => {
    try {
      if (type === 'metamask') {
        const address = await connectMetaMask();
        setWalletAddress(address);
        toast.success('Successfully connected to MetaMask');
      } else if (type === 'stellar') {
        console.log('Connecting to Stellar wallet...');
        // Stellar wallet connection logic would go here
      }
    } catch (error) {
      toast.error('Failed to connect wallet');
      console.error('Wallet connection error:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">SkillBridge</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
              <Search className="w-4 h-4" />
              Find Work
            </Link>
            <Link to="/talents" className="text-gray-600 hover:text-primary transition-colors">Hire Talent</Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-primary transition-colors">Dashboard</Link>
            <Link to="/profile" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Wallet2 className="w-4 h-4" />
                  {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleWalletConnect('metamask')}>
                  MetaMask
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleWalletConnect('stellar')}>
                  Stellar Wallet
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/search" className="block text-gray-600 hover:text-primary transition-colors">Find Work</Link>
            <Link to="/talents" className="block text-gray-600 hover:text-primary transition-colors">Hire Talent</Link>
            <Link to="/dashboard" className="block text-gray-600 hover:text-primary transition-colors">Dashboard</Link>
            <Link to="/profile" className="block text-gray-600 hover:text-primary transition-colors">Profile</Link>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full gap-2"
                onClick={() => handleWalletConnect('metamask')}
              >
                <Wallet2 className="w-4 h-4" />
                {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect MetaMask'}
              </Button>
              <Button 
                variant="outline" 
                className="w-full gap-2"
                onClick={() => handleWalletConnect('stellar')}
              >
                <Wallet2 className="w-4 h-4" />
                Connect Stellar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};