import User from "@/app/shared/models/user.model";

const USER_KEY = "user";

export const saveUser = (userToSave: User): void => {
  console.log("Saving User", userToSave);
  try {
    localStorage.setItem(
      USER_KEY,
      JSON.stringify({
        readings: userToSave.readings,
        themes: userToSave.themes,
      }),
    );
  } catch (error) {
    console.error("Error while saving user in LocalStorage", error);
  }
};

export const loadUserFromStorage = (): User => {
  try {
    const rawUser = localStorage.getItem(USER_KEY);

    if (rawUser) {
      const parsedUser: User = JSON.parse(rawUser);
      return new User(parsedUser.readings, parsedUser.themes);
    }

    return new User();
  } catch (error) {
    console.error("Error while getting user from LocalStorage", error);
    return new User();
  }
};
