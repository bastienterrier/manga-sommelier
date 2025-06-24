import { ReadingRating, UserReading } from "@/app/shared/models/user.model";
import Image from "next/image";
import React from "react";

interface ReadingSectionCardProps {
  reading: UserReading;
  onRatingUpdate: (rating: ReadingRating) => void;
  onRemove: () => void;
}

const ReadingCard: React.FC<ReadingSectionCardProps> = ({
  reading,
  onRatingUpdate,
  onRemove,
}) => {
  const getRatingClass = (rating: ReadingRating): string => {
    return rating === reading.rating
      ? "opacity-100"
      : "opacity-50 hover:opacity-100 transition-opacity";
  };

  return (
    <div
      key={reading.id}
      className="bg-gray-700/50 p-3 rounded-lg flex items-center gap-4"
    >
      <Image
        src={reading.imageUrl}
        alt={`Couverture de ${reading.title}`}
        width={100}
        height={150}
        className="w-12 h-auto rounded"
      />
      <div className="flex-grow">
        <p className="font-semibold text-white">{reading.title}</p>
        <div className="flex gap-2 mt-1">
          <button
            title="Adoré"
            className={`bg-green-500 text-white rounded px-2 py-0.5 text-xs cursor-pointer ${getRatingClass("LOVED")}`}
            onClick={() => onRatingUpdate("LOVED")}
          >
            😍
          </button>
          <button
            title="Aimé"
            className={`bg-sky-500 text-white rounded px-2 py-0.5 text-xs cursor-pointer ${getRatingClass("LIKED")}`}
            onClick={() => onRatingUpdate("LIKED")}
          >
            🙂
          </button>
          <button
            title="Neutre"
            className={`bg-gray-500 text-white rounded px-2 py-0.5 text-xs cursor-pointer ${getRatingClass("NEUTRAL")}`}
            onClick={() => onRatingUpdate("NEUTRAL")}
          >
            😐
          </button>
          <button
            title="Pas aimé"
            className={`bg-red-500 text-white rounded px-2 py-0.5 text-xs cursor-pointer ${getRatingClass("DISLIKED")}`}
            onClick={() => onRatingUpdate("DISLIKED")}
          >
            😕
          </button>
        </div>
      </div>
      <button
        title="Retirer"
        className="text-gray-500 hover:text-red-400 cursor-pointer"
        onClick={onRemove}
      >
        &times;
      </button>
    </div>
  );
};

export default ReadingCard;
