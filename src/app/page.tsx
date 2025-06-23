"use client";

import MangaSelection from "@/app/home/MangaSelection";
import ThemeSelection from "@/app/home/ThemeSelection";
import UserSelection from "@/app/home/UserSelection";
import { MangaSearchDto } from "@/app/shared/dtos/manga.dto";
import { useEffect, useState } from "react";

export default function Home() {
  const [mangas, setMangas] = useState<MangaSearchDto[]>([]);

  useEffect(() => {
    fetch("/api/starring")
      .then((response) => response.json())
      .then(setMangas);
  }, []);

  const searchManga = (query: string) => {
    const trimmedQuery = query.trim();

    if (trimmedQuery.length < 3) return;

    fetch(`/api/search?query=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then(setMangas);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-12">
        <MangaSelection mangas={mangas} onSearch={searchManga} />
        <ThemeSelection />
      </div>

      <div className="lg:col-span-1">
        <UserSelection />
      </div>
    </div>
  );
}
