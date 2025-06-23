export type ReadingRating = "LOVED" | "LIKED" | "NEUTRAL" | "DISLIKED";

export interface UserReading {
  id: number;
  title: string;
  imageUrl: string;
  rating: ReadingRating;
}

class User {
  private _readings: UserReading[] = [];

  get readings(): UserReading[] {
    return this._readings;
  }

  public addReading(reading: UserReading): void {
    this._readings = [...this._readings, reading];
  }

  public removeReading(readingId: number): void {
    this._readings = this._readings.filter(
      (reading) => reading.id !== readingId,
    );
  }

  public updateReadingRating(readingId: number, rating: ReadingRating): void {
    const reading = this._readings.find((reading) => reading.id === readingId);

    if (!reading) return;

    reading.rating = rating;
  }
}

export default User;
