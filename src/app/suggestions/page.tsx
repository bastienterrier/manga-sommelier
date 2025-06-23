"use client";

import Loader from "@/app/components/Loader";
import { SuggestionDto } from "@/app/shared/dtos/suggestion.dto";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState<SuggestionDto[]>([]);

  useEffect(() => {
    fetch("/api/suggestions", {
      method: "POST",
    })
      .then((response) => response.json())
      .then(setSuggestions);
  }, []);

  if (!suggestions.length) {
    return (
      <Loader
        heading="Calibration des recommandations..."
        messages={[
          "Analyse de votre sélection...",
          "Croisement des données de notre IA...",
          "Construction de vos suggestions uniques...",
          "Le Sommelier peaufine ses choix...",
        ]}
      ></Loader>
    );
  }

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Vos 3 pépites à découvrir
        </h2>
        <p className="text-lg text-gray-400 mt-2">
          Cliquez sur une couverture pour afficher les détails.
        </p>
      </div>
      <div className="space-y-8 max-w-4xl mx-auto">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.title}
            className="recommendation-card bg-gray-800/50 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 p-8"
          >
            <Image
              width={300}
              height={450}
              src={`https://placehold.co/300x450/1f2937/ffffff?text=${suggestion.title}`}
              alt={`Couverture de ${suggestion.title}`}
              className="w-48 h-auto rounded-lg shadow-lg flex-shrink-0"
            />
            <div className="w-full">
              <h3 className="text-3xl font-bold text-white">
                {suggestion.title}
              </h3>
              <p className="text-gray-400 mt-2 italic">{suggestion.synopsis}</p>

              <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-green-400 mb-2">
                    Les +
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {suggestion.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-red-400 mb-2">
                    Les -
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {suggestion.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center pt-8">
          <Link
            href="/"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            ← Modifier ma sélection
          </Link>
        </div>
      </div>
    </>
  );
}
