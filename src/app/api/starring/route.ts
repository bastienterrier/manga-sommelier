import { JikanMangaDto, JikanPagedResult } from "@/app/api/types/jikan.types";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type MangaSearchResult = {
  id: number;
  title: string;
  imageUrl: string;
  synopsis: string | null;
};

export async function GET() {
  try {
    const JIKAN_API_URL = `https://api.jikan.moe/v4/manga?order_by=popularity&sort=asc&limit=5`;

    console.log(`[API Starring] Appel de Jikan`);

    // TODO: refactor with Jikan Client

    const apiResponse = await fetch(JIKAN_API_URL, {
      next: { revalidate: 3600 },
    });

    if (!apiResponse.ok) {
      console.error(
        `[API Search] Erreur de l'API Jikan: ${apiResponse.status}`,
      );

      return NextResponse.json(
        { error: `Erreur de l'API Jikan: ${apiResponse.statusText}` },
        { status: apiResponse.status },
      );
    }

    const jikanData: JikanPagedResult<JikanMangaDto> = await apiResponse.json();

    const formattedResults: MangaSearchResult[] = jikanData.data.map(
      (manga: JikanMangaDto) => ({
        id: manga.mal_id,
        title: manga.title,
        imageUrl:
          manga.images?.jpg?.image_url ||
          `https://placehold.co/300x450/1f2937/ffffff?text=${encodeURIComponent(manga.title)}`, // client side
        synopsis: manga.synopsis,
      }),
    );

    return NextResponse.json(formattedResults);
  } catch (error) {
    console.error("[API Search] Erreur interne du serveur:", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue sur le serveur." },
      { status: 500 },
    );
  }
}
