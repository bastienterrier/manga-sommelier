"use client";

import MangaSelection from "@/app/home/MangaSelection";
import ThemeSelection from "@/app/home/ThemeSelection";
import UserSelection from "@/app/home/UserSelection";
import { MangaSearchDto } from "@/app/shared/dtos/manga.dto";
import User, { ReadingRating } from "@/app/shared/models/user.model";
import { useEffect, useState } from "react";

const USER_KEY = "user";

export default function Home() {
  const [mangas, setMangas] = useState<MangaSearchDto[]>([]);
  const [starring, setStarring] = useState<MangaSearchDto[]>([]);
  const [user, setUser] = useState<User>(new User());

  useEffect(() => {
    fetch("/api/starring")
      .then((response) => response.json())
      .then((mangas) => {
        setMangas(mangas);
        setStarring(mangas);
      });

    loadUserFromStorage();
  }, []);

  const loadUserFromStorage = () => {
    try {
      const rawUser = localStorage.getItem(USER_KEY);

      if (rawUser) {
        const parsedUser: User = JSON.parse(rawUser);
        const loadedUser = new User(parsedUser.readings);
        setUser(loadedUser);
      }
    } catch (error) {
      console.error("Error while getting user from LocalStorage", error);
    }
  };

  const saveUserInStore = (userToSave: User) => {
    try {
      localStorage.setItem(
        USER_KEY,
        JSON.stringify({ readings: userToSave.readings }),
      );
    } catch (error) {
      console.error("Error while saving user in LocalStorage", error);
    }
  };

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

  const updateReadingRating = (id: number, rating: ReadingRating) => {
    setUser(user.updateReadingRating(id, rating));
  };

  const removeReading = (id: number) => {
    setUser(user.removeReading(id));
  };

  useEffect(() => {
    saveUserInStore(user);
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
        <UserSelection
          user={user}
          onRatingUpdate={updateReadingRating}
          onReadingRemove={removeReading}
        />
      </div>
    </div>
  );
}
