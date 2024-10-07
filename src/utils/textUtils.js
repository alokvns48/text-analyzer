// Replace text
export const highlightText = (content, search, replace, replaceAll = false) => {
  if (!search) return content;
  const regex = new RegExp(search, replaceAll ? "gi" : "i");
  return content.replace(
    regex,
    `<span class="bg-yellow-200">${replace}</span>`
  );
};

// Get word count and character count
export const getWordAndCharCount = (text) => {
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const wordCount = new Set(words).size;
  const characterCount = text.replace(/[^a-zA-Z0-9]/g, "").length;
  return { wordCount, characterCount };
};

// Count occurrences
export const countOccurrences = (text, searchString) => {
  if (!searchString) return 0;
  const regex = new RegExp(searchString, "gi");
  const matches = text.match(regex) || [];
  return matches.length;
};
