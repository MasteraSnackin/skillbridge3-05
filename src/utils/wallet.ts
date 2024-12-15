export const connectMetaMask = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected to MetaMask:', accounts[0]);
      return accounts[0];
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      throw error;
    }
  } else {
    console.error('MetaMask is not installed');
    window.open('https://metamask.io/download/', '_blank');
  }
};