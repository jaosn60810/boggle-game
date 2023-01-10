export function splitByWhitespace(text) {
  return text.split(/\s+/);
}

export function removeSameWords(wordArray) {
  return [...new Set(wordArray)];
}
