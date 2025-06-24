import ReadingCard from "@/app/home/ReadingCard";
import User, { ReadingRating } from "@/app/shared/models/user.model";
import Link from "next/link";
import React from "react";

interface UserSelectionProps {
  user: User;
  onRatingUpdate: (id: number, ration: ReadingRating) => void;
}

const UserSelection: React.FC<UserSelectionProps> = ({
  user,
  onRatingUpdate,
}) => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 sticky top-24 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-4">Votre Sélection</h3>
      <p className="text-gray-400 mb-4">Donnez votre avis sur vos lectures.</p>
      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
        {!user.readings.length && (
          <div className="text-center py-8 text-gray-500">
            <p>Votre sélection est vide.</p>
            <p className="text-sm">Ajoutez des mangas pour commencer.</p>
          </div>
        )}

        {user.readings.map((reading) => (
          <ReadingCard
            key={reading.id}
            reading={reading}
            onRatingUpdate={(rating) => onRatingUpdate(reading.id, rating)}
          />
        ))}
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
