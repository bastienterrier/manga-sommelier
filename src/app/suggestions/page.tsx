import Link from "next/link";

export default function Suggestions() {
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
        <div className="recommendation-card bg-gray-800/50 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 p-8">
          <img
            src="https://placehold.co/300x450/1f2937/ffffff?text=Vagabond"
            alt="Couverture de Vagabond"
            className="w-48 h-auto rounded-lg shadow-lg flex-shrink-0"
          />
          <div className="w-full">
            <h3 className="text-3xl font-bold text-white">Vagabond</h3>
            <p className="text-gray-400 mt-2 italic">
              "Suite de Berserk, suivant les aventures du jeune Asashiro
              Takamura qui rêve d'être un samouraï."
            </p>

            <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg text-green-400 mb-2">
                  Les +
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      Manga écrit par Kentarō Miura (auteur de Berserk), la
                      profondeur et l'ambiance sont de grande qualité.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      La suite des aventures du personnage principal ambivalent
                      et complexe que nous connaissons déjà.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Un univers historique et culturellement riche.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-red-400 mb-2">
                  Les -
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>
                      Rythme lent qui peut être déconcertant pour les lecteurs
                      habitués à un rythme plus rapide.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Peut être un peu trop sombre pour certains.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="recommendation-card bg-gray-800/50 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 p-8"
          style={{ animationDelay: "0.2s" }}
        >
          <img
            src="https://placehold.co/300x450/1f2937/ffffff?text=Hokuto+no+Ken"
            alt="Couverture de Hokuto no Ken"
            className="w-48 h-auto rounded-lg shadow-lg flex-shrink-0"
          />
          <div className="w-full">
            <h3 className="text-3xl font-bold text-white">Hokuto no Ken</h3>
            <p className="text-gray-400 mt-2 italic">
              "Histoire d'un monde post-apocalyptique où règne la guerre et le
              chaos."
            </p>
            <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg text-green-400 mb-2">
                  Les +
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      Un des premiers mangas de Kenshiro, héros iconique du
                      genre.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Qualité du dessin et de l'écriture.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      Univers de science-fiction et post-apocalyptique original.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-red-400 mb-2">
                  Les -
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>
                      Histoire assez classique pour les fans de mangas, pas
                      grand chose de nouveau.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Peut être un peu trop violent pour certains.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="recommendation-card bg-gray-800/50 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 p-8"
          style={{ animationDelay: "0.4s" }}
        >
          <img
            src="https://placehold.co/300x450/1f2937/ffffff?text=Ajin"
            alt="Couverture de Ajin"
            className="w-48 h-auto rounded-lg shadow-lg flex-shrink-0"
          />
          <div className="w-full">
            <h3 className="text-3xl font-bold text-white">Ajin</h3>
            <p className="text-gray-400 mt-2 italic">
              "Un humain ordinaire se révèle être une créature immortelle,
              entraînant des poursuites incessantes."
            </p>
            <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg text-green-400 mb-2">
                  Les +
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Personnage principal original et complexe.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Qualité du dessin et de l'écriture.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Univers fantastique et original.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-red-400 mb-2">
                  Les -
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Pourrait être un peu trop sombre pour certains.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>
                      Rythme lent qui peut être déconcertant pour les lecteurs
                      habitués à un rythme plus rapide.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
