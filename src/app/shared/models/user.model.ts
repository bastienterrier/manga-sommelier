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
}

export default User;
