import React from "react";

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-bold text-green-500">{message}</h2>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-[#1980e6] text-white rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
