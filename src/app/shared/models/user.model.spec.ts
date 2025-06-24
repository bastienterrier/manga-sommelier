import User, { UserReading } from "@/app/shared/models/user.model";

const berserkReading: UserReading = {
  id: 1,
  title: "Berserk",
  rating: "LOVED",
  imageUrl: "berserk-url",
};
const gtoReading: UserReading = {
  id: 2,
  title: "GTO",
  rating: "DISLIKED",
  imageUrl: "gto-url",
};
const deathNoteReading: UserReading = {
  id: 3,
  title: "Death Note",
  rating: "LIKED",
  imageUrl: "death-note-url",
};
const narutoReading: UserReading = {
  id: 4,
  title: "Naruto",
  rating: "LIKED",
  imageUrl: "naruto-url",
};
const ohRohDenReading: UserReading = {
  id: 5,
  title: "Oh-Roh-Den",
  rating: "NEUTRAL",
  imageUrl: "oh-roh-den-url",
};

describe("User Model", () => {
  test("addReading()", () => {
    const cut = new User()
      .addReading(berserkReading)
      .addReading(berserkReading) // duplicated should be ignored
      .addReading(gtoReading);

    expect(cut.readings).toHaveLength(2);
    expect(cut.readings).toContain(berserkReading);
    expect(cut.readings).toContain(gtoReading);
  });

  test("removeReading()", () => {
    const cut = new User()
      .addReading(berserkReading)
      .addReading(gtoReading)
      .removeReading(2);

    expect(cut.readings).toHaveLength(1);
    expect(cut.readings).toContain(berserkReading);
    expect(cut.readings).not.toContain(gtoReading);
  });

  test("updateReadingRating()", () => {
    const cut = new User()
      .addReading(berserkReading)
      .updateReadingRating(4, "NEUTRAL") // unknown reading should be ignored
      .updateReadingRating(1, "DISLIKED");

    expect(cut.readings).toHaveLength(1);
    expect(cut.readings).toContainEqual({
      ...berserkReading,
      rating: "DISLIKED",
    });
  });

  describe("generateLlmPrompt()", () => {
    test("no reading", () => {
      const cut = new User();

      expect(() => cut.generateLlmPrompt()).toThrow(
        "Impossible de générer des recommandations sans lecture.",
      );
    });

    test("with readings", () => {
      const cut = new User()
        .addReading(berserkReading)
        .addReading(gtoReading)
        .addReading(deathNoteReading)
        .addReading(narutoReading)
        .addReading(ohRohDenReading);

      const result = cut.generateLlmPrompt();

      expect(result)
        .toStrictEqual(`Analyse les goûts d'un lecteur pour lui proposer trois recommandations pertinentes. Prends en forte considération les préférences suivantes :
\n1. Les mangas qu'il a adorés sont les meilleures références. Inspire-toi fortement de : Berserk.
\n2. Il a également apprécié les titres suivants, qui sont de bons indicateurs : Death Note, Naruto.
\n3. Point très important : il n'a pas du tout aimé ce qui suit. Évite donc les styles similaires à : GTO.
\n4. Pour information, il a lu les titres suivants sans avoir d'avis particulier. Ils peuvent être ignorés s'ils ne correspondent pas aux goûts principaux : Oh-Roh-Den.`);
    });
  });
});
