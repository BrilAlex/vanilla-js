export type UserType = {
  name: string
  age: number
};

export const increaseAge = (u: UserType) => {
  u.age++;
};

export const sortLetters = (letters: Array<string>) => {
  const copy = [...letters].sort();
  console.log(copy);
};