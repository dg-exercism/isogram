//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (string) => {
  const cleanString = string.replace(/[^a-z]/gi, '').toLowerCase();
  const letters = new Set(cleanString);
  return letters.size === cleanString.length
};
