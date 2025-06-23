import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserSelection: React.FC = () => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 sticky top-24 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-4">Votre Sélection</h3>

      <div
        id="selection-list"
        className="space-y-4 max-h-[60vh] overflow-y-auto pr-2"
      >
        <div className="bg-gray-700/50 p-3 rounded-lg flex items-center gap-4">
          <Image
            src="https://placehold.co/100x150/1f2937/ffffff?text=Berserk"
            alt="Couverture de Berserk"
            width={100}
            height={150}
            className="w-12 h-auto rounded"
          />
          <div className="flex-grow">
            <p className="font-semibold text-white">Berserk</p>
            <div className="flex gap-2 mt-1">
              <button
                title="Adoré"
                className="bg-green-500 text-white rounded px-2 py-0.5 text-xs opacity-50 hover:opacity-100 transition-opacity"
              >
                😍
              </button>
              <button
                title="Aimé"
                className="bg-sky-500 text-white rounded px-2 py-0.5 text-xs opacity-100"
              >
                🙂
              </button>
              <button
                title="Pas aimé"
                className="bg-red-500 text-white rounded px-2 py-0.5 text-xs opacity-50 hover:opacity-100 transition-opacity"
              >
                😕
              </button>
            </div>
          </div>
          <button title="Retirer" className="text-gray-500 hover:text-red-400">
            &times;
          </button>
        </div>

        <div className="bg-gray-700/50 p-3 rounded-lg flex items-center gap-4">
          <Image
            src="https://placehold.co/100x150/1f2937/ffffff?text=Vagabond"
            alt="Couverture de Vagabond"
            width={100}
            height={150}
            className="w-12 h-auto rounded"
          />
          <div className="flex-grow">
            <p className="font-semibold text-white">Vagabond</p>
            <div className="flex gap-2 mt-1">
              <button
                title="Adoré"
                className="bg-green-500 text-white rounded px-2 py-0.5 text-xs opacity-100"
              >
                😍
              </button>
              <button
                title="Aimé"
                className="bg-sky-500 text-white rounded px-2 py-0.5 text-xs opacity-50 hover:opacity-100 transition-opacity"
              >
                🙂
              </button>
              <button
                title="Pas aimé"
                className="bg-red-500 text-white rounded px-2 py-0.5 text-xs opacity-50 hover:opacity-100 transition-opacity"
              >
                😕
              </button>
            </div>
          </div>
          <button title="Retirer" className="text-gray-500 hover:text-red-400">
            &times;
          </button>
        </div>

        <div
          id="empty-selection"
          className="text-center py-8 text-gray-500 hidden"
        >
          <p>Votre sélection est vide.</p>
          <p className="text-sm">Ajoutez des mangas pour commencer.</p>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/suggestions"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-indigo-500/30 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:shadow-none"
          id="generate-button"
        >
          Générer mes recommandations
        </Link>
      </div>
    </div>
  );
};

export default UserSelection;
