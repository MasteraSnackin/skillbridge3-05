interface Freighter {
  connect(): Promise<void>;
  getPublicKey(): Promise<string>;
  isConnected(): Promise<boolean>;
  signTransaction(transaction: any): Promise<any>;
}

interface Window {
  freighter?: Freighter;
}