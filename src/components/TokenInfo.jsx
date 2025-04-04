import React from "react";

const TokenInfo = ({
  tokenName,
  tokenSymbol,
  totalSupply,
  balance,
  contractAddress,
}) => {
  return (
    <div className="bg-blue-800 bg-opacity-50 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Token Information</h2>
      <div className="space-y-3">
        <div>
          <p className="text-blue-300">Name</p>
          <p className="font-medium">{tokenName}</p>
        </div>
        <div>
          <p className="text-blue-300">Symbol</p>
          <p className="font-medium">{tokenSymbol}</p>
        </div>
        <div>
          <p className="text-blue-300">Total Supply</p>
          <p className="font-medium">
            {totalSupply} {tokenSymbol}
          </p>
        </div>
        <div>
          <p className="text-blue-300">Your Balance</p>
          <p className="font-medium text-xl">
            {balance} {tokenSymbol}
          </p>
        </div>
        <div>
          <p className="text-blue-300">Contract Address</p>
          <p className="font-mono text-sm truncate">{contractAddress}</p>
        </div>
        <div>
          <p className="text-blue-300">Network</p>
          <p className="font-medium">Sepolia Testnet</p>
        </div>
      </div>
    </div>
  );
};

export default TokenInfo;
