import { Button } from "@/components/ui/button";
import { Settings, Menu, Search, User, LogOut, BriefcaseIcon, PlusCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { WalletConnect } from "./navigation/WalletConnect";
import { MobileMenu } from "./navigation/MobileMenu";
import { connectMetaMask } from "@/utils/wallet";
import { connectStellarWallet } from "@/utils/stellarWallet";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<'metamask' | 'stellar' | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setWalletAddress(null);
      setWalletType(null);
      toast.success('Successfully logged out');
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b transition-all duration-300">
        <div className="absolute bottom-0 left-0 h-0.5 bg-primary" style={{ width: `${scrollProgress}%` }} />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary">
                SkillBridge - Demo Page
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to="/search" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      Find Work
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Browse available jobs and opportunities</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to="/dashboard" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                      <BriefcaseIcon className="w-4 h-4" />
                      Dashboard
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Access your personal dashboard</p>
                  </TooltipContent>
                </Tooltip>

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
                    <DropdownMenuItem onClick={handleLogout} disabled={isLoading}>
                      <span className="flex items-center gap-2">
                        <LogOut className="w-4 h-4" />
                        {isLoading ? 'Logging out...' : 'Logout'}
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <WalletConnect
                  walletAddress={walletAddress}
                  walletType={walletType}
                  setWalletAddress={setWalletAddress}
                  setWalletType={setWalletType}
                />
              </TooltipProvider>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative"
              >
                <Menu className="w-6 h-6" />
                {isMobileMenuOpen && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            walletType={walletType}
            walletAddress={walletAddress}
            handleWalletConnect={async (type) => {
              setIsLoading(true);
              try {
                if (type === 'metamask') {
                  const address = await connectMetaMask();
                  setWalletAddress(address);
                  setWalletType('metamask');
                } else {
                  const address = await connectStellarWallet();
                  setWalletAddress(address);
                  setWalletType('stellar');
                }
                toast.success(`Connected to ${type} wallet`);
              } catch (error) {
                toast.error('Failed to connect wallet');
              } finally {
                setIsLoading(false);
              }
            }}
            handleLogout={handleLogout}
          />
        </div>
      </nav>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
};
