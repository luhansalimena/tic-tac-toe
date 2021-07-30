import React from 'react';

const ResetButton = ({ handleResetClick }) => {
  return (
    <div className="flex w-full -my-16 justify-center">
      <button
        onClick={handleResetClick}
        className="py-3 px-10 font-bold bg-gray-100 text-gray-900 rounded text shadow-xl transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110">
        RESTART
      </button>
    </div>
  );
}

export default ResetButton;