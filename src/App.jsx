// App.jsx
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./index.css";

// Import components
import Header from "./components/Header";
import TokenInfo from "./components/TokenInfo";
import TokenActions from "./components/TokenActions";
import WelcomeSection from "./components/WelcomeSection";
import TransactionNotification from "./components/TransactionNotification";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState("0");
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("0");
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [burnAmount, setBurnAmount] = useState("");
  const [mintTo, setMintTo] = useState("");
  const [mintAmount, setMintAmount] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState("");

  const contractAddress = "0x1977eB16b26e9d7dc5BADa7f3Ac752bF8631bEd0";
  const contractABI = [
    // ABI functions for basic ERC20 functionality
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function transfer(address to, uint256 value) returns (bool)",
    "function burn(uint256 amount)",
    "function mint(address to, uint256 amount)",
    "function owner() view returns (address)",
  ];

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          initializeContract(accounts[0]);
        }
      } else {
        console.log("Please install MetaMask!");
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        setIsConnected(true);
        initializeContract(accounts[0]);
      } else {
        alert("Please install MetaMask!");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const initializeContract = async (userAddress) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tokenContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      setContract(tokenContract);

      // Get token details
      const name = await tokenContract.name();
      const symbol = await tokenContract.symbol();
      const supply = await tokenContract.totalSupply();
      const userBalance = await tokenContract.balanceOf(userAddress);
      const contractOwner = await tokenContract.owner();

      setTokenName(name);
      setTokenSymbol(symbol);
      setTotalSupply(ethers.utils.formatEther(supply));
      setBalance(ethers.utils.formatEther(userBalance));
      setIsOwner(contractOwner.toLowerCase() === userAddress.toLowerCase());

      // Setup event listener for account changes
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          initializeContract(accounts[0]);
        } else {
          setIsConnected(false);
          setAccount("");
          setBalance("0");
        }
      });
    } catch (error) {
      console.error("Error initializing contract:", error);
    }
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    setTransactionStatus("Processing transfer...");

    try {
      if (!ethers.utils.isAddress(transferTo)) {
        throw new Error("Invalid address");
      }

      const amountInWei = ethers.utils.parseEther(transferAmount);
      const tx = await contract.transfer(transferTo, amountInWei);
      await tx.wait();

      // Update balance
      const newBalance = await contract.balanceOf(account);
      setBalance(ethers.utils.formatEther(newBalance));

      setTransferTo("");
      setTransferAmount("");
      setTransactionStatus("Transfer successful!");

      setTimeout(() => setTransactionStatus(""), 5000);
    } catch (error) {
      console.error("Transfer error:", error);
      setTransactionStatus(`Transfer failed: ${error.message}`);

      setTimeout(() => setTransactionStatus(""), 5000);
    }
  };

  const handleBurn = async (e) => {
    e.preventDefault();
    setTransactionStatus("Processing burn...");

    try {
      const amountInWei = ethers.utils.parseEther(burnAmount);
      const tx = await contract.burn(amountInWei);
      await tx.wait();

      // Update balance and total supply
      const newBalance = await contract.balanceOf(account);
      const newSupply = await contract.totalSupply();

      setBalance(ethers.utils.formatEther(newBalance));
      setTotalSupply(ethers.utils.formatEther(newSupply));

      setBurnAmount("");
      setTransactionStatus("Burn successful!");

      setTimeout(() => setTransactionStatus(""), 5000);
    } catch (error) {
      console.error("Burn error:", error);
      setTransactionStatus(`Burn failed: ${error.message}`);

      setTimeout(() => setTransactionStatus(""), 5000);
    }
  };

  const handleMint = async (e) => {
    e.preventDefault();
    setTransactionStatus("Processing mint...");

    try {
      if (!ethers.utils.isAddress(mintTo)) {
        throw new Error("Invalid address");
      }

      const amountInWei = ethers.utils.parseEther(mintAmount);
      const tx = await contract.mint(mintTo, amountInWei);
      await tx.wait();

      // Update balance and total supply
      const newBalance = await contract.balanceOf(account);
      const newSupply = await contract.totalSupply();

      setBalance(ethers.utils.formatEther(newBalance));
      setTotalSupply(ethers.utils.formatEther(newSupply));

      setMintTo("");
      setMintAmount("");
      setTransactionStatus("Mint successful!");

      setTimeout(() => setTransactionStatus(""), 5000);
    } catch (error) {
      console.error("Mint error:", error);
      setTransactionStatus(`Mint failed: ${error.message}`);

      setTimeout(() => setTransactionStatus(""), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Header
          isConnected={isConnected}
          account={account}
          connectWallet={connectWallet}
        />

        {isConnected ? (
          <div className="grid md:grid-cols-2 gap-8">
            <TokenInfo
              tokenName={tokenName}
              tokenSymbol={tokenSymbol}
              totalSupply={totalSupply}
              balance={balance}
              contractAddress={contractAddress}
            />

            <TokenActions
              transferTo={transferTo}
              setTransferTo={setTransferTo}
              transferAmount={transferAmount}
              setTransferAmount={setTransferAmount}
              handleTransfer={handleTransfer}
              burnAmount={burnAmount}
              setBurnAmount={setBurnAmount}
              handleBurn={handleBurn}
              mintTo={mintTo}
              setMintTo={setMintTo}
              mintAmount={mintAmount}
              setMintAmount={setMintAmount}
              handleMint={handleMint}
              isOwner={isOwner}
            />
          </div>
        ) : (
          <WelcomeSection connectWallet={connectWallet} />
        )}

        <TransactionNotification transactionStatus={transactionStatus} />
      </div>
    </div>
  );
}

export default App;
