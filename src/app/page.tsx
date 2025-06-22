import MangaSelection from "@/app/home/manga-selection/MangaSelection";
import ThemeSelection from "@/app/home/theme-selection/ThemeSelection";
import UserSelection from "@/app/home/user-selection/UserSelection";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-12">
        <MangaSelection />
        <ThemeSelection />
      </div>

      <div className="lg:col-span-1">
        <UserSelection />
      </div>
    </div>
  );
}
