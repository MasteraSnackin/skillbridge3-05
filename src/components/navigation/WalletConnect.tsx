import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { connectMetaMask } from "@/utils/wallet";
import { connectStellarWallet } from "@/utils/stellarWallet";

interface WalletConnectProps {
  walletAddress: string | null;
  walletType: 'metamask' | 'stellar' | null;
  setWalletAddress: (address: string | null) => void;
  setWalletType: (type: 'metamask' | 'stellar' | null) => void;
}

export const WalletConnect = ({ 
  walletAddress, 
  walletType, 
  setWalletAddress, 
  setWalletType 
}: WalletConnectProps) => {
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

  return (
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
  );
};