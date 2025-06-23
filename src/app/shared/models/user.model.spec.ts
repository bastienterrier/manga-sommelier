import User, { UserReading } from "@/app/shared/models/user.model";

const berserkReading: UserReading = {
  id: 1,
  title: "Berserk",
  rating: "LOVED",
  imageUrl: "url",
};
const gtoReading: UserReading = {
  id: 2,
  title: "GTO",
  rating: "NEUTRAL",
  imageUrl: "another-url",
};

describe("User Model", () => {
  test("addReading()", () => {
    const cut = new User();

    cut.addReading(berserkReading);
    cut.addReading(gtoReading);

    expect(cut.readings).toHaveLength(2);
    expect(cut.readings).toContain(berserkReading);
    expect(cut.readings).toContain(gtoReading);
  });

  test("removeReading()", () => {
    const cut = new User();

    cut.addReading(berserkReading);
    cut.addReading(gtoReading);

    cut.removeReading(2);

    expect(cut.readings).toHaveLength(1);
    expect(cut.readings).toContain(berserkReading);
    expect(cut.readings).not.toContain(gtoReading);
  });

  test("updateReadingRating()", () => {
    const cut = new User();

    cut.addReading(berserkReading);

    cut.updateReadingRating(1, "DISLIKED");

    expect(cut.readings).toHaveLength(1);
    expect(cut.readings).toContainEqual({
      ...berserkReading,
      rating: "DISLIKED",
    });
  });
});
