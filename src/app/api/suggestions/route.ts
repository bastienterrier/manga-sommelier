import { SuggestionDto } from "@/app/shared/dtos/suggestion.dto";

const mock: SuggestionDto[] = [
  {
    title: "Vagabond",
    synopsis:
      "Suite de Berserk, suivant les aventures du jeune Asashiro Takamura qui rêve d'être un samouraï.",
    pros: [
      "Manga écrit par Kentarō Miura (auteur de Berserk), la profondeur et l'ambiance sont de grande qualité.",
      "La suite des aventures du personnage principal ambivalent et complexe que nous connaissons déjà.",
      "Un univers historique et culturellement riche.",
    ],
    cons: [
      "Rythme lent qui peut être déconcertant pour les lecteurs habitués à un rythme plus rapide.",
      "Peut être un peu trop sombre pour certains.",
    ],
  },
  {
    title: "Hokuto no Ken",
    synopsis:
      "Histoire d'un monde post-apocalyptique où règne la guerre et le chaos.",
    pros: [
      "Un des premiers mangas de Kenshiro, héros iconique du genre.",
      "Qualité du dessin et de l'écriture.",
      "Univers de science-fiction et post-apocalyptique original.",
    ],
    cons: [
      "Histoire assez classique pour les fans de mangas, pas grand chose de nouveau.",
      "Peut être un peu trop violents pour certains.",
    ],
  },
  {
    title: "Ajin",
    synopsis:
      "Un humain ordinaire se révèle être une créature immortelle, entraînant des poursuites incessantes.",
    pros: [
      "Personnage principal original et complexe.",
      "Qualité du dessin et de l'écriture.",
      "Univers fantastique et original.",
    ],
    cons: [
      "Pourrait être un peu trop sombre pour certains.",
      "Rythme lent qui peut être déconcertant pour les lecteurs habitués à un rythme plus rapide.",
    ],
  },
];
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function POST() {
  await delay(9000);

  return Response.json(mock);
}
