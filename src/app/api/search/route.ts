import { JikanMangaDto, JikanPagedResult } from "@/app/api/types/jikan.types";
import { MangaSearchDto } from "@/app/shared/dtos/manga.dto";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json(
        { error: 'Le paramètre de recherche "query" est obligatoire.' },
        { status: 400 },
      );
    }

    const JIKAN_API_URL = `https://api.jikan.moe/v4/manga?order_by=popularity&sort=asc&limit=25&sfw&q=${encodeURIComponent(query)}`;

    console.log(`[API Search] Appel de Jikan avec la query: ${query}`);

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

    const formattedResults: MangaSearchDto[] = jikanData.data.map(
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
