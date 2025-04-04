import React from "react";

const TransferForm = ({
  transferTo,
  setTransferTo,
  transferAmount,
  setTransferAmount,
  handleTransfer,
}) => {
  return (
    <div className="bg-blue-800 bg-opacity-50 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Transfer Tokens</h2>
      <form onSubmit={handleTransfer} className="space-y-4">
        <div>
          <label className="block text-blue-300 mb-1">Recipient Address</label>
          <input
            type="text"
            value={transferTo}
            onChange={(e) => setTransferTo(e.target.value)}
            placeholder="0x..."
            className="w-full rounded-lg bg-blue-900 border border-blue-700 p-2 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-blue-300 mb-1">Amount</label>
          <input
            type="text"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            placeholder="0.0"
            className="w-full rounded-lg bg-blue-900 border border-blue-700 p-2 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Transfer
        </button>
      </form>
    </div>
  );
};

export default TransferForm;
