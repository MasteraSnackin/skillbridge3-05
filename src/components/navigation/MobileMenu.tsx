import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlusCircle, LogOut } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MobileMenuProps {
  isOpen: boolean;
  walletType: 'metamask' | 'stellar' | null;
  walletAddress: string | null;
  handleWalletConnect: (type: 'metamask' | 'stellar') => void;
  handleLogout: () => void;
}

export const MobileMenu = ({
  isOpen,
  walletType,
  walletAddress,
  handleWalletConnect,
  handleLogout
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 space-y-4 animate-fade-in">
      <TooltipProvider>
        <Link to="/search" className="block text-gray-600 hover:text-primary transition-colors">
          <Tooltip>
            <TooltipTrigger asChild>
              <span>Find Work</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Browse available jobs and opportunities</p>
            </TooltipContent>
          </Tooltip>
        </Link>
        <Link to="/dashboard" className="block text-gray-600 hover:text-primary transition-colors">
          <Tooltip>
            <TooltipTrigger asChild>
              <span>Dashboard</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>View your personal dashboard</p>
            </TooltipContent>
          </Tooltip>
        </Link>
        <Link to="/profile" className="block text-gray-600 hover:text-primary transition-colors">Profile</Link>
        <Button 
          variant="secondary" 
          className="w-full gap-2 animate-fade-in"
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
      </TooltipProvider>
    </div>
  );
};