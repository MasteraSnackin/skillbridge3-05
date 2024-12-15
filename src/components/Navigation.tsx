import { Button } from "@/components/ui/button";
import { Settings, Menu, Search, User, LogOut, BriefcaseIcon, PlusCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connectMetaMask } from "@/utils/wallet";
import { connectStellarWallet } from "@/utils/stellarWallet";
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
  const [walletType, setWalletType] = useState<'metamask' | 'stellar' | null>(null);

  const handleWalletConnect = async (type: 'metamask' | 'stellar') => {
    try {
      let address;
      if (type === 'metamask') {
        address = await connectMetaMask();
      } else if (type === 'stellar') {
        address = await connectStellarWallet();
      }
      
      if (address) {
        setWalletAddress(address);
        setWalletType(type);
        toast.success(`Successfully connected to ${type === 'metamask' ? 'MetaMask' : 'Stellar'} wallet`);
      }
    } catch (error) {
      toast.error('Failed to connect wallet');
      console.error('Wallet connection error:', error);
    }
  };

  const handleLogout = () => {
    setWalletAddress(null);
    setWalletType(null);
    toast.success('Successfully logged out');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">SkillBridge</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/search" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
              <Search className="w-4 h-4" />
              Find Work
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
              <BriefcaseIcon className="w-4 h-4" />
              Dashboard
            </Link>
            
            <Button 
              variant="secondary" 
              className="gap-2"
              onClick={() => window.open('https://forms.gle/kHe5HWCkVPgL7N347', '_blank')}
            >
              <PlusCircle className="w-4 h-4" />
              Join Waitlist
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/profile" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <span className="flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleWalletConnect('metamask')}>
                  MetaMask
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleWalletConnect('stellar')}>
                  Stellar Wallet (Freighter)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/search" className="block text-gray-600 hover:text-primary transition-colors">Find Work</Link>
            <Link to="/dashboard" className="block text-gray-600 hover:text-primary transition-colors">Dashboard</Link>
            <Link to="/profile" className="block text-gray-600 hover:text-primary transition-colors">Profile</Link>
            <Button 
              variant="secondary" 
              className="w-full gap-2"
              onClick={() => window.open('https://forms.gle/kHe5HWCkVPgL7N347', '_blank')}
            >
              <PlusCircle className="w-4 h-4" />
              Join Waitlist
            </Button>
            <Button 
              variant="outline" 
              className="w-full gap-2"
              onClick={() => handleWalletConnect('metamask')}
            >
              {walletType === 'metamask' && walletAddress ? 
                `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 
                'Connect MetaMask'}
            </Button>
            <Button 
              variant="outline" 
              className="w-full gap-2"
              onClick={() => handleWalletConnect('stellar')}
            >
              {walletType === 'stellar' && walletAddress ? 
                `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 
                'Connect Stellar'}
            </Button>
            <Button 
              variant="ghost" 
              className="w-full gap-2"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};