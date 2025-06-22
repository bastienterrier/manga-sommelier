import React from "react";

const ThemeSelection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-1 flex items-center">
        <span className="bg-indigo-500 text-white rounded-full h-8 w-8 text-lg flex items-center justify-center mr-3">
          2
        </span>
        Affinez avec vos thèmes préférés
      </h2>
      <p className="text-gray-400 mb-4 ml-11">
        Choisissez les genres ou ambiances qui vous attirent le plus.
      </p>
      <div className="flex flex-wrap gap-3 ml-11">
        <button className="bg-gray-800 hover:bg-indigo-500 hover:text-white text-gray-300 font-medium py-2 px-4 rounded-full transition-colors text-sm">
          Dark Fantasy
        </button>
        <button className="bg-gray-800 hover:bg-indigo-500 hover:text-white text-gray-300 font-medium py-2 px-4 rounded-full transition-colors text-sm">
          Psychologique
        </button>
        <button className="bg-gray-800 hover:bg-indigo-500 hover:text-white text-gray-300 font-medium py-2 px-4 rounded-full transition-colors text-sm">
          Seinen
        </button>
        <button className="bg-gray-800 hover:bg-indigo-500 hover:text-white text-gray-300 font-medium py-2 px-4 rounded-full transition-colors text-sm">
          Shonen
        </button>
        <button className="bg-gray-800 hover:bg-indigo-500 hover:text-white text-gray-300 font-medium py-2 px-4 rounded-full transition-colors text-sm">
          Science-Fiction
        </button>
        <button className="bg-gray-800 hover:bg-indigo-500 hover:text-white text-gray-300 font-medium py-2 px-4 rounded-full transition-colors text-sm">
          Historique
        </button>
        <button className="bg-gray-800 hover:bg-indigo-500 hover:text-white text-gray-300 font-medium py-2 px-4 rounded-full transition-colors text-sm">
          Tranche de vie
        </button>
      </div>
    </div>
  );
};

export default ThemeSelection;
