import MangaCard from "@/app/home/MangaCard";
import { MangaSearchDto } from "@/app/shared/dtos/manga.dto";
import { ReadingRating } from "@/app/shared/models/user.model";
import React, { useState } from "react";

interface MangaSelectionProps {
  mangas: MangaSearchDto[];
  onSearch: (search: string) => void;
  onMangaSelect: (manga: MangaSearchDto, rating: ReadingRating) => void;
}

const MangaSelection: React.FC<MangaSelectionProps> = ({
  mangas,
  onSearch,
  onMangaSelect,
}) => {
  const [query, setQuery] = useState<string>("");
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-1 flex items-center">
        <span className="bg-indigo-500 text-white rounded-full h-8 w-8 text-lg flex items-center justify-center mr-3">
          1
        </span>
        Ajoutez les mangas que vous avez lus
      </h2>
      <p className="text-gray-400 mb-4 ml-11">
        Recherchez un manga et cliquez sur sa couverture pour l’ajouter à votre
        sélection.
      </p>
      <div className="relative">
        <input
          onChange={(event) => setQuery(event.currentTarget.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              onSearch(query);
            }
          }}
          type="text"
          placeholder="Rechercher un manga (ex: 'Chainsaw Man', 'Jujutsu Kaisen...)"
          className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
        />
        <svg
          className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {mangas.map((manga) => (
          <MangaCard key={manga.id} manga={manga} onSelect={onMangaSelect} />
        ))}
      </div>
    </div>
  );
};

export default MangaSelection;
