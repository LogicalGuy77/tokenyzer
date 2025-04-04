import React from "react";
import TransferForm from "./TransferForm";
import BurnForm from "./BurnForm";
import MintForm from "./MintForm";

const TokenActions = ({
  transferTo,
  setTransferTo,
  transferAmount,
  setTransferAmount,
  handleTransfer,
  burnAmount,
  setBurnAmount,
  handleBurn,
  mintTo,
  setMintTo,
  mintAmount,
  setMintAmount,
  handleMint,
  isOwner,
}) => {
  return (
    <div className="flex flex-col space-y-6">
      <TransferForm
        transferTo={transferTo}
        setTransferTo={setTransferTo}
        transferAmount={transferAmount}
        setTransferAmount={setTransferAmount}
        handleTransfer={handleTransfer}
      />

      <BurnForm
        burnAmount={burnAmount}
        setBurnAmount={setBurnAmount}
        handleBurn={handleBurn}
      />

      {isOwner && (
        <MintForm
          mintTo={mintTo}
          setMintTo={setMintTo}
          mintAmount={mintAmount}
          setMintAmount={setMintAmount}
          handleMint={handleMint}
        />
      )}
    </div>
  );
};

export default TokenActions;
