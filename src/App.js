import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import Referral from "./components/Referral/Referral";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

// 1. Get projectId
const projectId = "862e2544b694a246addaff50ba2ab87e";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};
const sepolia = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://rpc.sepolia.org",
  rpcUrl: "https://endpoints.omniatech.io/v1/eth/sepolia/public",
};

// 3. Create a metadata object
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet, sepolia],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

function App() {
  return (
    <div className="sc-eDLKkx eTbKOW">
      <Navbar />
      <MainSection />
      <Referral />
      <Toaster />
    </div>
  );
}

export default App;
