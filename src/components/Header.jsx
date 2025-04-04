import React from "react";

const Header = ({ isConnected, account, connectWallet }) => {
  return (
    <header className="flex justify-between items-center mb-12">
      <div>
        <h1 className="text-3xl font-bold">CipherCoin dApp</h1>
        <p className="text-blue-300">Interact with your ERC20 token</p>
      </div>

      {!isConnected ? (
        <button
          onClick={connectWallet}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="text-right">
          <p className="text-sm text-blue-300">Connected Account</p>
          <p className="font-mono text-sm truncate max-w-xs">{account}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
