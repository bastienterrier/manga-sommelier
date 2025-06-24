import Tag from "@/app/components/Tag";
import React from "react";

export const THEMES: string[] = [
  // Demographic
  "Shōnen",
  "Shōjo",
  "Seinen",
  "Josei",
  "Kodomomuke",
  // Genre
  "Action / Aventure",
  "Fantasy",
  "Isekai",
  "Science-Fiction",
  "Tranche de vie (Slice of Life)",
  "Romance",
  "Comédie",
  "Drame",
  "Horreur",
  "Mystère / Policier",
  "Sport",
  "Historique",
  "Mecha",
];

interface ThemeSelectionProps {
  themes: string[];
  selectedThemes: string[];
  onSelected: (theme: string) => void;
  onUnselected: (theme: string) => void;
}

const ThemeSelection: React.FC<ThemeSelectionProps> = ({
  themes,
  selectedThemes,
  onSelected,
  onUnselected,
}) => {
  const isSelected = (theme: string) =>
    !!selectedThemes.find((t) => t === theme);

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
        {themes.map((theme) => (
          <button
            key={theme}
            className="cursor-pointer"
            onClick={() =>
              isSelected(theme) ? onUnselected(theme) : onSelected(theme)
            }
          >
            <Tag selected={isSelected(theme)}>{theme}</Tag>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelection;
