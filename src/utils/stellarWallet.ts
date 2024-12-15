import { toast } from "sonner";

export const connectStellarWallet = async () => {
  try {
    // Check if Freighter (Stellar wallet) is installed
    if (typeof window.freighter !== 'undefined') {
      // Request permission to connect
      await window.freighter.connect();
      
      // Get the public key
      const publicKey = await window.freighter.getPublicKey();
      console.log('Connected to Stellar wallet:', publicKey);
      return publicKey;
    } else {
      console.error('Freighter (Stellar wallet) is not installed');
      window.open('https://www.freighter.app/', '_blank');
      toast.error('Please install Freighter wallet');
      return null;
    }
  } catch (error) {
    console.error('Error connecting to Stellar wallet:', error);
    toast.error('Failed to connect to Stellar wallet');
    throw error;
  }
};