import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
//import { phantomWallet } from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
    rainbowWallet,
    metaMaskWallet,
    coinbaseWallet,
    walletConnectWallet,
    phantomWallet,
  } from '@rainbow-me/rainbowkit/wallets';
  


export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'cac38d65f99eb494a730ee1e1a3f852a',
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

export const connectors = connectorsForWallets(
    [
      {
        groupName: 'Suggested',
        wallets: [
          rainbowWallet,
          metaMaskWallet,
          coinbaseWallet,
          walletConnectWallet,
          phantomWallet
        ],
      },
    ],
    { appName: 'RainbowKit App', projectId: 'cac38d65f99eb494a730ee1e1a3f852a' },
    
  );