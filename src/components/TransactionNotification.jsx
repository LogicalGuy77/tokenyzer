import React from "react";

const TransactionNotification = ({ transactionStatus }) => {
  if (!transactionStatus) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 p-4 rounded-lg shadow-lg ${
        transactionStatus.includes("failed")
          ? "bg-red-700"
          : transactionStatus.includes("Processing")
          ? "bg-yellow-700"
          : "bg-green-700"
      }`}
    >
      {transactionStatus}
    </div>
  );
};

export default TransactionNotification;
