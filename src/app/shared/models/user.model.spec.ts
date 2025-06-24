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
  describe("readings", () => {
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
  });

  describe("themes", () => {
    test("addTheme()", () => {
      const cut = new User()
        .addTheme("Fantasy")
        .addTheme("Action")
        .addTheme("Action");

      expect(cut.themes).toHaveLength(2);
      expect(cut.themes).toContain("Fantasy");
      expect(cut.themes).toContain("Action");
    });

    test("removeTheme()", () => {
      const cut = new User()
        .addTheme("Fantasy")
        .addTheme("Action")
        .removeTheme("Action");

      expect(cut.themes).toHaveLength(1);
      expect(cut.themes).toContain("Fantasy");
      expect(cut.themes).not.toContain("Action");
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
        .toStrictEqual(`- Les mangas que j'ai adorés sont les meilleures références. Inspire-toi fortement de : Berserk.
\n- J'ai également apprécié les titres suivants, qui sont de bons indicateurs : Death Note, Naruto.
\n- Point très important : je n'ai pas du tout aimé ce qui suit. Évite donc les styles similaires à : GTO.
\n- Pour information, j'ai lu les titres suivants sans avoir d'avis particulier. Ils peuvent être ignorés s'ils ne correspondent pas aux goûts principaux : Oh-Roh-Den.`);
    });
  });
});
