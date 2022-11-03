export function convertSlugIntoSentenceCase(thisID: string) {
  return thisID?.replace(/-/g, " ").replace(/\b[a-z]/g, function () {
    return arguments[0].toUpperCase();
  });
}
