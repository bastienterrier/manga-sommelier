import { MangaSearchDto } from "@/app/shared/dtos/manga.dto";
import { ReadingRating } from "@/app/shared/models/user.model";
import Image from "next/image";
import React from "react";

interface MangaCardProps {
  manga: MangaSearchDto;
  onSelect: (manga: MangaSearchDto, rating: ReadingRating) => void;
}

const MangaCard: React.FC<MangaCardProps> = ({ manga, onSelect }) => {
  const handleRatingClick = (e: React.MouseEvent, rating: ReadingRating) => {
    e.stopPropagation();
    onSelect(manga, rating);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="manga-card cursor-pointer group relative rounded-lg"
      onClick={() => onSelect(manga, "LIKED")}
      onKeyUp={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onSelect(manga, "LIKED");
        }
      }}
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
        loading="lazy"
      />

      <p className="text-center mt-2 font-medium text-sm truncate group-hover:text-indigo-300 transition-colors">
        {manga.title}
      </p>

      <div
        className="
          absolute inset-0
          bg-black/70 backdrop-blur-sm
          flex items-center justify-center
          opacity-0 group-hover:opacity-90
          transition-opacity duration-300
          rounded-lg
        "
      >
        <div className="flex gap-3">
          <button
            tabIndex={-1}
            title="Noter Adoré"
            className="text-2xl hover:scale-150 transition-transform cursor-pointer"
            onClick={(e) => handleRatingClick(e, "LOVED")}
          >
            😍
          </button>

          <button
            tabIndex={-1}
            title="Noter Aimé"
            className="text-2xl hover:scale-150 transition-transform cursor-pointer"
            onClick={(e) => handleRatingClick(e, "LIKED")}
          >
            🙂
          </button>

          <button
            tabIndex={-1}
            title="Noter Neutre"
            className="text-2xl hover:scale-150 transition-transform cursor-pointer"
            onClick={(e) => handleRatingClick(e, "NEUTRAL")}
          >
            😐
          </button>

          <button
            tabIndex={-1}
            title="Noter Pas aimé"
            className="text-2xl hover:scale-150 transition-transform cursor-pointer"
            onClick={(e) => handleRatingClick(e, "DISLIKED")}
          >
            😕
          </button>
        </div>
      </div>
    </div>
  );
};

export default MangaCard;
