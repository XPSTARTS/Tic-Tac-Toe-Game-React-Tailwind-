import React from 'react';

const Board = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        w-24 h-24 md:w-28 md:h-28
        bg-white/30 backdrop-blur-lg
        rounded-2xl shadow-xl
        flex items-center justify-center
        text-4xl font-extrabold
        cursor-pointer
        hover:scale-105 hover:bg-white/40
        transition-all duration-200
        select-none
      "
    >
      <span
        className={
          value === "X"
            ? "text-blue-700"
            : value === "O"
            ? "text-pink-600"
            : ""
        }
      >
        {value}
      </span>
    </div>
  );
};

export default Board;
