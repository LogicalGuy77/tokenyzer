import React from "react";

const WelcomeSection = ({ connectWallet }) => {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold mb-4">Welcome to CipherCoin dApp</h2>
      <p className="mb-8 max-w-lg mx-auto">
        Connect your wallet to view your balance and interact with the
        CipherCoin token on the Sepolia testnet.
      </p>
      <button
        onClick={connectWallet}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default WelcomeSection;
