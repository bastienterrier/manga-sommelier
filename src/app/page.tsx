"use client";

import MangaSelection from "@/app/home/MangaSelection";
import ThemeSelection from "@/app/home/ThemeSelection";
import UserSelection from "@/app/home/UserSelection";
import { MangaSearchDto } from "@/app/shared/dtos/manga.dto";
import User, { ReadingRating } from "@/app/shared/models/user.model";
import { loadUserFromStorage, saveUser } from "@/app/shared/storage/storage";
import { useEffect, useState } from "react";

export default function Home() {
  const [mangas, setMangas] = useState<MangaSearchDto[]>([]);
  const [starring, setStarring] = useState<MangaSearchDto[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/starring")
      .then((response) => response.json())
      .then((mangas) => {
        setMangas(mangas);
        setStarring(mangas);
      });

    setUser(loadUserFromStorage());
  }, []);

  const searchManga = (query: string) => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery.length) {
      setMangas(starring);
    } else {
      fetch(`/api/search?query=${encodeURIComponent(trimmedQuery)}`)
        .then((response) => response.json())
        .then(setMangas);
    }
  };

  const addReading = (manga: MangaSearchDto, rating: ReadingRating) => {
    if (!user) return;

    setUser(
      user.addReading({
        id: manga.id,
        title: manga.title,
        imageUrl: manga.imageUrl,
        rating: rating,
      }),
    );
  };

  const updateReadingRating = (id: number, rating: ReadingRating) => {
    if (!user) return;
    setUser(user.updateReadingRating(id, rating));
  };

  const removeReading = (id: number) => {
    if (!user) return;
    setUser(user.removeReading(id));
  };

  useEffect(() => {
    if (!user) return;
    saveUser(user);
  }, [user]);

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
        {user && (
          <UserSelection
            user={user}
            onRatingUpdate={updateReadingRating}
            onReadingRemove={removeReading}
          />
        )}
      </div>
    </div>
  );
}
