"use client";

import MangaSelection from "@/app/home/MangaSelection";
import ThemeSelection from "@/app/home/ThemeSelection";
import UserSelection from "@/app/home/UserSelection";
import { MangaSearchDto } from "@/app/shared/dtos/manga.dto";
import User from "@/app/shared/models/user.model";
import { useEffect, useState } from "react";

export default function Home() {
  const [mangas, setMangas] = useState<MangaSearchDto[]>([]);
  const [user, setUser] = useState<User>(new User());

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

  const addReading = (manga: MangaSearchDto) => {
    setUser(
      user.addReading({
        id: manga.id,
        title: manga.title,
        imageUrl: manga.imageUrl,
        rating: "LIKED",
      }),
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-12">
        <MangaSelection
          mangas={mangas}
          onSearch={searchManga}
          onMangaSelect={addReading}
        />
        <ThemeSelection />
      </div>

      <div className="lg:col-span-1">
        <UserSelection user={user} />
      </div>
    </div>
  );
}
