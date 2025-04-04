import React from "react";

const MintForm = ({
  mintTo,
  setMintTo,
  mintAmount,
  setMintAmount,
  handleMint,
}) => {
  return (
    <div className="bg-blue-800 bg-opacity-50 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Mint Tokens (Owner Only)</h2>
      <form onSubmit={handleMint} className="space-y-4">
        <div>
          <label className="block text-blue-300 mb-1">Recipient Address</label>
          <input
            type="text"
            value={mintTo}
            onChange={(e) => setMintTo(e.target.value)}
            placeholder="0x..."
            className="w-full rounded-lg bg-blue-900 border border-blue-700 p-2 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-blue-300 mb-1">Amount to Mint</label>
          <input
            type="text"
            value={mintAmount}
            onChange={(e) => setMintAmount(e.target.value)}
            placeholder="0.0"
            className="w-full rounded-lg bg-blue-900 border border-blue-700 p-2 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Mint
        </button>
      </form>
    </div>
  );
};

export default MintForm;
