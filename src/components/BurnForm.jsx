import React from "react";

const BurnForm = ({ burnAmount, setBurnAmount, handleBurn }) => {
  return (
    <div className="bg-blue-800 bg-opacity-50 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Burn Tokens</h2>
      <form onSubmit={handleBurn} className="space-y-4">
        <div>
          <label className="block text-blue-300 mb-1">Amount to Burn</label>
          <input
            type="text"
            value={burnAmount}
            onChange={(e) => setBurnAmount(e.target.value)}
            placeholder="0.0"
            className="w-full rounded-lg bg-blue-900 border border-blue-700 p-2 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Burn
        </button>
      </form>
    </div>
  );
};

export default BurnForm;
