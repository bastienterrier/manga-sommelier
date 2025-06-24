import { MangaSearchDto } from "@/app/shared/dtos/manga.dto";
import { ReadingRating } from "@/app/shared/models/user.model";
import Image from "next/image";
import React from "react";

interface MangaCardProps {
  manga: MangaSearchDto;
  onSelect: (manga: MangaSearchDto, rating: ReadingRating) => void;
}

const MangaCard: React.FC<MangaCardProps> = ({ manga, onSelect }) => {
  return (
    <button
      className="manga-card cursor-pointer group"
      key={manga.id}
      onClick={() => onSelect(manga, "LIKED")}
    >
      <Image
        src={
          manga.imageUrl ??
          `https://placehold.co/300x450/1f2937/ffffff?text=${encodeURIComponent(manga.title)}`
        }
        width={300}
        height={450}
        alt={`Couverture de ${manga.title}`}
        className="rounded-lg w-full aspect-[2/3] object-cover shadow-lg"
      />
      <p className="text-center mt-2 font-medium text-sm truncate group-hover:text-indigo-300">
        {manga.title}
      </p>
    </button>
  );
};

export default MangaCard;
