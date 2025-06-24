export type ReadingRating = "LOVED" | "LIKED" | "NEUTRAL" | "DISLIKED";

export interface UserReading {
  id: number;
  title: string;
  imageUrl: string;
  rating: ReadingRating;
}

class User {
  private readonly _readings: UserReading[] = [];

  constructor(initialReadings: UserReading[] = []) {
    this._readings = initialReadings;
  }

  get readings(): UserReading[] {
    return this._readings;
  }

  public addReading(reading: UserReading): User {
    if (this._readings.some((r) => r.id === reading.id)) {
      return this;
    }

    return new User([...this._readings, reading]);
  }

  public removeReading(readingId: number): User {
    return new User(
      this._readings.filter((reading) => reading.id !== readingId),
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
        `1. Les mangas que j'ai adorés sont les meilleures références. Inspire-toi fortement de : ${loved.join(", ")}.`,
      );
    }

    if (liked.length > 0) {
      promptParts.push(
        `\n2. J'ai également apprécié les titres suivants, qui sont de bons indicateurs : ${liked.join(", ")}.`,
      );
    }

    if (disliked.length > 0) {
      promptParts.push(
        `\n3. Point très important : je n'ai pas du tout aimé ce qui suit. Évite donc les styles similaires à : ${disliked.join(", ")}.`,
      );
    }

    if (neutral.length > 0) {
      promptParts.push(
        `\n4. Pour information, j'ai lu les titres suivants sans avoir d'avis particulier. Ils peuvent être ignorés s'ils ne correspondent pas aux goûts principaux : ${neutral.join(", ")}.`,
      );
    }

    return promptParts.join("\n");
  }
}

export default User;
