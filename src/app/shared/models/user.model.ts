export type ReadingRating = "LOVED" | "LIKED" | "NEUTRAL" | "DISLIKED";

export interface UserReading {
  id: number;
  title: string;
  imageUrl: string;
  rating: ReadingRating;
}

class User {
  private readonly _readings: UserReading[] = [];
  private readonly _themes: string[] = [];

  constructor(
    initialReadings: UserReading[] = [],
    initialThemes: string[] = [],
  ) {
    this._readings = initialReadings;
    this._themes = initialThemes;
  }

  get themes(): string[] {
    return this._themes;
  }

  get readings(): UserReading[] {
    return this._readings;
  }

  public addTheme(theme: string) {
    if (this._themes.some((t) => t === theme)) {
      return this;
    }

    return new User(this._readings, [...this._themes, theme]);
  }

  public removeTheme(theme: string): User {
    return new User(
      this._readings,
      this._themes.filter((t) => t !== theme),
    );
  }

  public addReading(reading: UserReading): User {
    if (this._readings.some((r) => r.id === reading.id)) {
      return this;
    }

    return new User([...this._readings, reading], this._themes);
  }

  public removeReading(readingId: number): User {
    return new User(
      this._readings.filter((reading) => reading.id !== readingId),
      this._themes,
    );
  }

  public updateReadingRating(readingId: number, rating: ReadingRating): User {
    return new User(
      this._readings.map((reading) => {
        if (reading.id === readingId) {
          return { ...reading, rating: rating };
        }
        return reading;
      }),
      this._themes,
    );
  }

  public generateLlmPrompt(): string {
    if (!this._readings.length) {
      throw "Impossible de générer des recommandations sans lecture.";
    }

    const loved = this._readings
      .filter((r) => r.rating === "LOVED")
      .map((r) => r.title);

    const liked = this._readings
      .filter((r) => r.rating === "LIKED")
      .map((r) => r.title);

    const disliked = this._readings
      .filter((r) => r.rating === "DISLIKED")
      .map((r) => r.title);

    const neutral = this._readings
      .filter((r) => r.rating === "NEUTRAL")
      .map((r) => r.title);

    const promptParts: string[] = [];

    if (loved.length > 0) {
      promptParts.push(
        `- Les mangas que j'ai adorés sont les meilleures références. Inspire-toi fortement de : ${loved.join(", ")}.`,
      );
    }

    if (liked.length > 0) {
      promptParts.push(
        `\n- J'ai également apprécié les titres suivants, qui sont de bons indicateurs : ${liked.join(", ")}.`,
      );
    }

    if (disliked.length > 0) {
      promptParts.push(
        `\n- Point très important : je n'ai pas du tout aimé ce qui suit. Évite donc les styles similaires à : ${disliked.join(", ")}.`,
      );
    }

    if (neutral.length > 0) {
      promptParts.push(
        `\n- Pour information, j'ai lu les titres suivants sans avoir d'avis particulier. Ils peuvent être ignorés s'ils ne correspondent pas aux goûts principaux : ${neutral.join(", ")}.`,
      );
    }

    return promptParts.join("\n");
  }
}

export default User;
