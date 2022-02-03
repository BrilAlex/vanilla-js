export function sum(a: number, b: number) {
  return a + b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function splitIntoWords(sentence: string) {
  const words = sentence.toLowerCase().split(" ");
  return words.map(el => el.replace(/[!.,;:-]/gi, "")).filter(el => el !== "");
}